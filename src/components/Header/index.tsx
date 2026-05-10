import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { User } from 'lucide-react-native';
import styles from './styles';
import Logo from '../Logo';
import SideMenu from '../SideMenu';
import { colors } from '../../styles/colors';
import auth from '@react-native-firebase/auth';
import { getUserPhoto } from '../../services/storage';


const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const uri = await getUserPhoto(currentUser.uid);
        if (uri) {
          setPhotoUri(uri);
        }
      }
    };
    fetchPhoto();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={{ width: 40, height: 40 }}>
          <Logo variant="simbolo" width="100%" style={{ height: '100%' }} />
        </View>

        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => setMenuVisible(true)}
        >
          {photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.profileImage} />
          ) : (
            <User color={colors.textSecondary} size={24} />
          )}
        </TouchableOpacity>
      </View>

      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />
    </>
  );
};

export default Header;
