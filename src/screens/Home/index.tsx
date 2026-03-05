import React from 'react';
import { Text, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

import styles from './styles.ts';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import InfoSection from '../../components/InfoSection';
import Button from '../../components/Button';

type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeNavigationProp;
}

const Home = ({ navigation }: Props) => {
    return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{ padding: spacing.lg }}
    >
      <Text style={styles.logo}>ReUse</Text>

      <Text style={styles.headline}>
        Troque. Reutilize. Conecte.
      </Text>

      <Text style={styles.subtitle}>
        Uma plataforma digital que conecta pessoas para dar novos ciclos aos objetos.
      </Text>

      <InfoSection
        title="O Problema"
        description="Muitos objetos em bom estado são esquecidos ou descartados por falta de conexão entre quem tem e quem precisa."
      />

      <InfoSection
        title="A Solução"
        description="O ReUse conecta pessoas para trocar itens de forma prática, fortalecendo a comunidade e reduzindo o desperdício."
      />

      <Button
        title="Começar"
        onPress={() => navigation.navigate('Discover')}
      />
    </ScrollView>
  );
};

export default Home;