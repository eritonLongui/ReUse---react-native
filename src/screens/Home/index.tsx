import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import GradientBackground from '../../components/GradientBackground';
import { spacing } from '../../styles/spacing';
import InfoSection from '../../components/InfoSection';
import Button from '../../components/Button';
import Logo from '../../components/Logo/index.tsx';

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
        <View style={{ marginVertical: spacing.xl }}>
          <Logo width='70%' variant='sombreado' />

          <Text style={styles.headline}>
            Troque{'\n'}
            Reutilize{'\n'}
            Transforme
          </Text>

          <Text style={styles.subtitle}>
            Somos uma plataforma digital que dá novos ciclos à objetos, e aproxima pessoas.
          </Text>
        </View>

        <InfoSection
          title="O Problema"
          description="Muitos objetos em bom estado são esquecidos ou descartados por falta de conexão entre quem tem e quem precisa."
        />

        <InfoSection
          title="A Solução"
          description="O ReUse conecta pessoas para trocar itens de forma prática, fortalecendo a comunidade e reduzindo o desperdício."
        />

        <Button
          title="Explorar"
          onPress={() => navigation.navigate('Discover')}
        />
      </ScrollView>
    </GradientBackground>
  );
};

export default Home;