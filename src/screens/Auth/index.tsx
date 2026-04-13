import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
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
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground';

import { storeToken } from '../../services/storage';

type AuthNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Auth'
>;

interface Props {
    navigation: AuthNavigationProp;
}

const Auth = ({ navigation }: Props) => {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

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
            console.log('Token Firebase:', token);

            await storeToken(token);

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