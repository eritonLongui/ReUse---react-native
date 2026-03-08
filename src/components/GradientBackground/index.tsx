import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles.ts';
import { gradients } from '../../styles/gradients';

type Props = {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'blue';
  style?: any;
};

const GradientBackground = ({
  children,
  variant = 'light',
  style,
}: Props) => {
  return (
    <LinearGradient
      colors={gradients[variant]}
      style={[styles.container, style]}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

