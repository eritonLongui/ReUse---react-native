import React from 'react';
import { Image, DimensionValue } from 'react-native';
import styles from './styles.ts';

type LogoProps = {
  variant?: 'logotipo' | 'simbolo' | 'sombreado';
  width?: DimensionValue;
  style?: object;
}

const logos = {
  logotipo: require('../../assets/images/logotipo.png'),
  simbolo: require('../../assets/images/isotipo.png'),
  sombreado: require('../../assets/images/sombreado.png')
};

const Logo = ({ variant = 'logotipo', width = '100%', style }: LogoProps) => {
  return (
    <Image
      style={[styles.image, { width }, style]}
      source={logos[variant]}
    />
  )
};

export default Logo;