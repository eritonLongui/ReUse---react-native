import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground';
import { storeToken, storeUserPhoto, storeUserCep } from '../../services/storage';
import axios from 'axios';
import { useCameraPermission } from 'react-native-vision-camera';

type AuthNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;
type AuthRouteProp = RouteProp<RootStackParamList, 'Auth'>;

interface Props {
    navigation: AuthNavigationProp;
    route: AuthRouteProp;
}

const Auth = ({ navigation, route }: Props) => {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');
    const [loadingCep, setLoadingCep] = useState(false);

    const { hasPermission, requestPermission } = useCameraPermission();

    useEffect(() => {
        const ensurePermission = async () => {
            if (mode !== 'register') return;

            if (hasPermission) return;

            const granted = await requestPermission();

            if (!granted) {
                Alert.alert(
                    'Permissão necessária',
                    'Ative a câmera nas configurações para tirar a foto de perfil.',
                );
            }
        };

        ensurePermission();
    }, [mode, hasPermission, requestPermission]);

    useEffect(() => {
        if (route.params?.photoUri) {
            setPhotoUri(route.params.photoUri);
        }
    }, [route.params?.photoUri]);

    useEffect(() => {
        const fetchCep = async () => {
            const cleanCep = cep.replace(/\D/g, '');
            if (cleanCep.length === 8) {
                setLoadingCep(true);
                try {
                    const res = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);
                    if (res.data && !res.data.erro) {
                        setAddress(`${res.data.logradouro}, ${res.data.bairro} - ${res.data.localidade}/${res.data.uf}`);
                    } else {
                        setAddress('CEP não encontrado');
                    }
                } catch (err) {
                    setAddress('Erro ao buscar CEP');
                } finally {
                    setLoadingCep(false);
                }
            } else {
                setAddress('');
            }
        };
        fetchCep();
    }, [cep]);

    const handleSubmit = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert('Atenção', 'Preencha e-mail e senha.');
            return;
        }

        try {
            setLoading(true);

            const userCredential =
                mode === 'login'
                    ? await auth().signInWithEmailAndPassword(email.trim(), password)
                    : await auth().createUserWithEmailAndPassword(email.trim(), password);

            const user = userCredential.user;
            const token = await user.getIdToken();

            await storeToken(token);

            if (mode === 'register' && photoUri) {
                await storeUserPhoto(user.uid, photoUri);
            }

            if (mode === 'register' && cep) {
                await storeUserCep(user.uid, { cep, address });
            }

            navigation.replace('Discover');
        } catch (error: any) {
            console.log('ERRO FIREBASE:', error);
            setTimeout(() => {
                Alert.alert('Erro', error?.message || 'Erro ao autenticar');
            }, 100);
        } finally {
            setLoading(false);
        }
    };

    return (
        <GradientBackground>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.container}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.top}>
                        <Text style={styles.title}>
                            {mode === 'login' ? 'Entrar' : 'Criar conta'}
                        </Text>

                        <Text style={styles.subtitle}>
                            Acesse sua conta para continuar explorando itens disponíveis para troca.
                        </Text>
                    </View>

                    <View style={styles.form}>
                        {mode === 'register' && (
                            <View style={styles.photoSection}>
                                {photoUri ? (
                                    <Image source={{ uri: photoUri }} style={styles.avatar} />
                                ) : (
                                    <View style={styles.avatarPlaceholder}>
                                        <Text style={styles.avatarPlaceholderText}>Foto</Text>
                                    </View>
                                )}

                                <TouchableOpacity
                                    style={styles.photoButton}
                                    onPress={() => navigation.navigate('Camera')}
                                    activeOpacity={0.85}
                                >
                                    <Text style={styles.photoButtonText}>Tirar foto de perfil</Text>
                                </TouchableOpacity>

                                <Text style={styles.cameraHint}>
                                    A foto será salva junto do seu perfil neste aparelho.
                                </Text>
                            </View>
                        )}

                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor={styles.placeholderColor.color}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            placeholderTextColor={styles.placeholderColor.color}
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        {mode === 'register' && (
                            <>
                                <TextInput
                                    style={styles.input}
                                    placeholder="CEP (somente números)"
                                    placeholderTextColor={styles.placeholderColor.color}
                                    keyboardType="numeric"
                                    maxLength={8}
                                    value={cep}
                                    onChangeText={setCep}
                                />
                                {loadingCep && <ActivityIndicator color={styles.placeholderColor.color} style={{ marginVertical: 8 }} />}
                                {!!address && (
                                    <View style={[styles.input, { justifyContent: 'center', backgroundColor: 'rgba(255,255,255,0.1)' }]}>
                                        <Text style={{ color: '#ccc', fontFamily: 'Ubuntu-Regular' }}>
                                            {address}
                                        </Text>
                                    </View>
                                )}
                            </>
                        )}

                        <TouchableOpacity
                            style={styles.primaryButton}
                            onPress={handleSubmit}
                            disabled={loading}
                            activeOpacity={0.85}
                        >
                            {loading ? (
                                <ActivityIndicator color="#FFFFFF" />
                            ) : (
                                <Text style={styles.primaryButtonText}>
                                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                                </Text>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.secondaryButton}
                            onPress={() => setMode(mode === 'login' ? 'register' : 'login')}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.secondaryButtonText}>
                                {mode === 'login'
                                    ? 'Não tem conta? Criar agora'
                                    : 'Já tem conta? Fazer login'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </GradientBackground>
    );
};

export default Auth;