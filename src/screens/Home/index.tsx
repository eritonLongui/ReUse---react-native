import React from 'react';
import { Text, ScrollView, View, useWindowDimensions } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground';

import InfoSection from '../../components/InfoSection';
import Button from '../../components/Button';
import Logo from '../../components/Logo/index.tsx';
import Footer from '../../components/Footer/index.tsx';
import * as Location from 'expo-location';
import { useCameraPermission } from 'react-native-vision-camera';
import { storeLocation } from '../../services/storage.ts';

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeNavigationProp;
}

const Home = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();
  const { requestPermission: requestCameraPermission } = useCameraPermission();

  const handleExplore = async () => {
    // Solicitar Câmera
    await requestCameraPermission();

    // Solicitar Localização
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        await getCurrentLocationAndProceed();
      } else {
        // Mesmo sem localização, prossegue
        navigation.navigate('Auth');
      }
    } catch (err) {
      console.warn(err);
      navigation.navigate('Auth');
    }
  };

  const getCurrentLocationAndProceed = async () => {
    try {
      const position = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      const lat = Number(position.coords.latitude.toFixed(3));
      const long = Number(position.coords.longitude.toFixed(3));
      const updateAt = new Date().toISOString();
      
      await storeLocation({ lat, long, updateAt });
      navigation.navigate('Auth');
    } catch (error) {
      console.log('Erro ao pegar localização', error);
      navigation.navigate('Auth');
    }
  };

  return (
    <GradientBackground>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[styles.top, { height }]}>
          <Logo width='70%' variant='sombreado' />

          <View style={[styles.hero, { height: height * 0.4 }]}>
            <Text style={styles.headline}>
              Troque{'\n'}
              Reutilize{'\n'}
              Conecte
            </Text>

            <Text style={styles.subtitle}>
              Uma plataforma digital que dá novos ciclos a objetos e aproxima pessoas.
            </Text>
          </View>
        </View>

        <InfoSection
          title="O Problema"
          description="Muitos objetos em bom estado são esquecidos ou descartados por falta de conexão entre quem tem e quem precisa deles."
        />

        <InfoSection
          title="A Solução"
          description="O ReUse conecta pessoas para trocar itens de forma simples, fortalecendo a comunidade e reduzindo o desperdício."
        />

        <View style={[styles.bottom, { height: height * 0.7 , justifyContent: 'flex-end', gap: 180 }]}>
          <Button
            title="Explorar"
            onPress={handleExplore}
          />

          <Footer />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;