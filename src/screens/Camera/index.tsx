import React, { useRef } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import styles from './styles.ts';

type CameraNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Camera'
>;

interface Props {
  navigation: CameraNavigationProp;
}

const CameraScreen = ({ navigation }: Props) => {
  const device = useCameraDevice('front');
  const cameraRef = useRef<Camera>(null);

  const takePhoto = async () => {
    try {
      const photo = await cameraRef.current?.takePhoto();

      if (!photo?.path) {
        Alert.alert('Erro', 'Não foi possível capturar a foto.');
        return;
      }

      const photoUri = `file://${photo.path}`;
      navigation.navigate('Auth', { photoUri });
    } catch (error) {
      console.log('ERRO AO TIRAR FOTO:', error);
      Alert.alert('Erro', 'Falha ao capturar a foto.');
    }
  };

  if (!device) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.message}>Nenhuma câmera encontrada.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          photo={true}
        />

        <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
          <Text style={styles.captureButtonText}>Capturar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CameraScreen;