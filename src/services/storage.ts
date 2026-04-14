import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@user_token';
const PHOTO_KEY_PREFIX = '@user_photo_';

export const storeToken = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getToken = async () => {
  return await AsyncStorage.getItem(TOKEN_KEY);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export const storeUserPhoto = async (uid: string, photoUri: string) => {
  await AsyncStorage.setItem(`${PHOTO_KEY_PREFIX}${uid}`, photoUri);
};

export const getUserPhoto = async (uid: string) => {
  return await AsyncStorage.getItem(`${PHOTO_KEY_PREFIX}${uid}`);
};