import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles.ts';

import auth from '@react-native-firebase/auth';
import { removeToken } from '../../services/storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import Footer from '../../components/Footer/index.tsx';
import Button from '../../components/Button';
import { spacing } from '../../styles/spacing.ts';

type DiscoverNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'Discover'
>;

interface Props {
    navigation: DiscoverNavigationProp;
}

const Discover = ({ navigation }: Props) => {

    const handleLogout = async () => {
        try {
            await auth().signOut();
            await removeToken();
            navigation.replace('Home');
        } catch (error) {
            console.log('Erro ao deslogar:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ height: spacing.xl }} />

            <View style={styles.center}>
                <Text style={styles.logo}>Como funciona? 🚀</Text>
            </View>

            <View style={styles.bottom}>
                <Button
                    title="Logout"
                    onPress={handleLogout}
                />

                <View style={{ height: spacing.xl }} />

                <Footer />
            </View>
        </ScrollView>
    );
};

export default Discover;