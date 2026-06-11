import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './src/navigation/stack';
import './src/styles/webStyles';

export default function App() {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={styles.outerContainer}>
      <View style={isWeb ? styles.webContainer : styles.mobileContainer}>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: Platform.OS === 'web' ? '#777777' : 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webContainer: {
    width: '100%',
    maxWidth: 450,
    height: '100%',
    maxHeight: '100%',
    backgroundColor: '#ffffff',
    ...Platform.select({
      web: {
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.15)',
      },
    }),
  },
  mobileContainer: {
    flex: 1,
    width: '100%',
  },
});