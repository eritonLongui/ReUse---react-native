import React, { useEffect, useState } from 'react';
import { Alert, ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types.ts';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground/index.tsx';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const Auth = ({ navigation }: Props) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Discover');
      }
    });

    return unsubscribe;
  }, [navigation]);

  const handleSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Atenção', 'Preencha e-mail e senha.');
      return;
    }

    try {
      setLoading(true);

      if (mode === 'login') {
        await auth().signInWithEmailAndPassword(email.trim(), password);
      } else {
        await auth().createUserWithEmailAndPassword(email.trim(), password);
      }

      navigation.replace('Discover');
    } catch (error: any) {
      const message =
        error?.code === 'auth/invalid-email'
          ? 'E-mail inválido.'
          : error?.code === 'auth/user-not-found'
          ? 'Usuário não encontrado.'
          : error?.code === 'auth/wrong-password'
          ? 'Senha incorreta.'
          : error?.code === 'auth/email-already-in-use'
          ? 'Esse e-mail já está em uso.'
          : 'Não foi possível autenticar. Tente novamente.';

      Alert.alert('Erro', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>
          {mode === 'login' ? 'Entrar' : 'Criar conta'}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#8A8A8A"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#8A8A8A"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.primaryButtonText}>
              {mode === 'login' ? 'Entrar' : 'Cadastrar'}
            </Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => setMode(mode === 'login' ? 'register' : 'login')}
        >
          <Text style={styles.secondaryButtonText}>
            {mode === 'login'
              ? 'Não tem conta? Criar agora'
              : 'Já tem conta? Fazer login'}
          </Text>
        </TouchableOpacity>
      </View>
    </GradientBackground>
  );
};

export default Auth;