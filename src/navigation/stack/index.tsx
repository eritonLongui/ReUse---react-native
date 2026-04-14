import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

import Home from '../../screens/Home';
import Discover from '../../screens/Discover';
import Auth from '../../screens/Auth';
import CameraScreen from '../../screens/Camera';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default StackRoutes;