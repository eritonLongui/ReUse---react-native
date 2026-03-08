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
    <GradientBackground variant='blue'>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </GradientBackground>
  );
};

export default ReuseButton;