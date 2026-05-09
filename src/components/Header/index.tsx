import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { User } from 'lucide-react-native';
import styles from './styles';
import Logo from '../Logo';
import SideMenu from '../SideMenu';
import { colors } from '../../styles/colors';

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        {/* Usando o Logo já existente com 'icone' variant (caso ele suporte, senao width pequeno) */}
        <View style={{ width: 40, height: 40 }}>
          <Logo variant="primary" width="100%" />
        </View>

        <TouchableOpacity 
          style={styles.profileButton} 
          onPress={() => setMenuVisible(true)}
        >
          <User color={colors.textSecondary} size={24} />
          {/* Se houvesse imagem: <Image source={{uri: '...'}} style={styles.profileImage} /> */}
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
