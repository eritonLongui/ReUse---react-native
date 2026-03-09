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
    <TouchableOpacity onPress={onPress}>
      <GradientBackground variant='blue' style={styles.button} >
        <Text style={styles.text}>{title}</Text>
      </GradientBackground>
    </TouchableOpacity>
  );
};

export default ReuseButton;