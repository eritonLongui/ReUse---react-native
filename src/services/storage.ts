import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@user_token';
const PHOTO_KEY_PREFIX = '@user_photo_';
const LOCATION_KEY_PREFIX = '@user_location_';
const CEP_KEY_PREFIX = '@user_cep_';

/*
  =========================================
  CACHE ATUAL DO SISTEMA:
  - Token do usuário (Auth)
  - Dados básicos/Foto de Perfil do usuário
  - Geolocalização do perfil (latitude, longitude, updateAt)
  - CEP e Endereço validados

  CACHE FUTURO (A IMPLEMENTAR):
  - Itens já carregados no Discover (Feed)
  - Última busca ou filtro usado
  - Imagens ou metadados de itens vistos recentemente
  =========================================
*/

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

export const storeLocation = async (location: { lat: number, long: number, updateAt: string }, uid: string = 'temp') => {
  await AsyncStorage.setItem(`${LOCATION_KEY_PREFIX}${uid}`, JSON.stringify(location));
};

export const getLocation = async (uid: string = 'temp') => {
  const loc = await AsyncStorage.getItem(`${LOCATION_KEY_PREFIX}${uid}`);
  return loc ? JSON.parse(loc) : null;
};

export const storeUserCep = async (uid: string, cepData: { cep: string, address: string }) => {
  await AsyncStorage.setItem(`${CEP_KEY_PREFIX}${uid}`, JSON.stringify(cepData));
};

export const getUserCep = async (uid: string) => {
  const cep = await AsyncStorage.getItem(`${CEP_KEY_PREFIX}${uid}`);
  return cep ? JSON.parse(cep) : null;
};