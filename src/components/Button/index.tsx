import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles.ts';

interface Props {
  title: string;
  onPress?: () => void;
}

export default function ReuseButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};