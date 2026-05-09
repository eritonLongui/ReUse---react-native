import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles.ts';
import GradientBackground from '../GradientBackground/index.tsx';

interface Props {
  title: string;
  onPress?: () => void;
}

const ReuseButton = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.8}>
      <GradientBackground variant='blue' style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>{title}</Text>
      </GradientBackground>
    </TouchableOpacity>
  );
};

export default ReuseButton;