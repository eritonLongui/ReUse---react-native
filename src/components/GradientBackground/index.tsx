import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { gradients } from '../../styles/gradients'

type Props = {
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'blue'
}

export function GradientBackground({
  children,
  variant = 'light',
}: Props) {
  return (
    <LinearGradient
      colors={gradients[variant]}
    >
      {children}
    </LinearGradient>
  )
}