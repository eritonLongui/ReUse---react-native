import React from 'react';
import { View, Text } from 'react-native';

export const Camera = React.forwardRef((props, ref) => {
  return (
    <View style={props.style}>
      <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>
        [Camera Mock para Web]
      </Text>
    </View>
  );
});

export const useCameraDevice = () => {
  return {
    id: 'mock-device',
    name: 'Mock Web Camera',
    hasFlash: false,
  };
};

export const useCameraPermission = () => {
  return {
    hasPermission: true,
    requestPermission: async () => true,
  };
};
