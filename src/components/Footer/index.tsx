import React from "react";
import { Text, View } from 'react-native';
import styles from './styles.ts';
import Logo from "../Logo/index.tsx";

const Footer = () => {
    return (
        <View style={styles.fundo}>
            <Logo width={ 48 } variant='simbolo' style={styles.logo}/>

            <Text style={styles.text}>Todos os direitos reservados - ReUse 2026</Text>
        </View>
    )
}

export default Footer;