import React from 'react';
import { Image } from 'react-native';

type LogoProps = {
  variant?: 'logotipo' | 'simbolo';
}

const Logo = ({ variant = 'logotipo' }: LogoProps) => {
  const source =
    variant === 'simbolo'
      ? require('../../assets/isotipo.png')
      : require('../../assets/logotipo.png');

  return (
    <Image
      source={source}
      resizeMode='contain'
    />
  )
};

export default Logo;