import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

const Discover = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.logo}>Como funciona? 🚀</Text>
        </View>
    )
};

export default Discover;