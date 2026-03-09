import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground';

import InfoSection from '../../components/InfoSection';
import Button from '../../components/Button';
import Logo from '../../components/Logo/index.tsx';
import Footer from '../../components/Footer/index.tsx';

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeNavigationProp;
}

const Home = ({ navigation }: Props) => {
  return (
    <GradientBackground>
      <ScrollView>
        <View style={styles.top}>
          <Logo width='70%' variant='sombreado' />

          <View style={styles.hero}>
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

        <View style={styles.bottom}>
          <Button
            title="Explorar"
            onPress={() => navigation.navigate('Discover')}
          />

          <Footer />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;