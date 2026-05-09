import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';
import { X, LogOut, Settings, User as UserIcon } from 'lucide-react-native';
import { colors } from '../../styles/colors';
import auth from '@react-native-firebase/auth';
import { removeToken } from '../../services/storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const { width, height } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.7;

interface Props {
  visible: boolean;
  onClose: () => void;
}

const SideMenu = ({ visible, onClose }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = async () => {
    try {
      await auth().signOut();
      await removeToken();
      onClose();
      navigation.replace('Home');
    } catch (error) {
      console.log('Erro ao deslogar:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.background} activeOpacity={1} onPress={onClose} />
        
        <Animated.View style={styles.drawer}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <X color={colors.textSecondary} size={28} />
          </TouchableOpacity>

          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <UserIcon color={colors.textSecondary} size={40} />
            </View>
            <Text style={styles.userName}>Usuário</Text>
            <Text style={styles.userEmail}>{auth().currentUser?.email || 'usuario@email.com'}</Text>
          </View>

          <View style={styles.menuItems}>
            <TouchableOpacity style={styles.menuItem}>
              <Settings color={colors.textSecondary} size={24} />
              <Text style={styles.menuItemText}>Configurações</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <LogOut color={colors.error} size={24} />
            <Text style={styles.logoutText}>Sair da conta</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  drawer: {
    width: DRAWER_WIDTH,
    height: height,
    backgroundColor: '#fff',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    position: 'absolute',
    right: 0,
  },
  closeButton: {
    alignSelf: 'flex-start',
    marginBottom: 24,
    marginTop: 20, // SafeArea support via margin
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 20,
    color: colors.primary,
  },
  userEmail: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  menuItems: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuItemText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: colors.textSecondary,
    marginLeft: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 'auto',
    marginBottom: 40,
  },
  logoutText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    color: colors.error,
    marginLeft: 16,
  }
});

export default SideMenu;
