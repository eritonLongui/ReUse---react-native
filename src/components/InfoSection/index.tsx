import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  description: string;
}

export default function InfoSection({ title, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};