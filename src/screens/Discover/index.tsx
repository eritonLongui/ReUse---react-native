import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles.ts';
import Header from '../../components/Header';
import GradientBackground from '../../components/GradientBackground';
import { spacing } from '../../styles/spacing';

const Discover = () => {
    return (
        <GradientBackground>
            <Header />
            <ScrollView contentContainerStyle={[styles.container, { paddingHorizontal: spacing.xl }]}>
                <View style={{ marginTop: spacing.xl }}>
                    <Text style={[styles.logo, { fontSize: 24, textAlign: 'left' }]}>
                        Feed de Trocas
                    </Text>
                    <Text style={{ marginTop: spacing.sm, color: '#666', fontFamily: 'Ubuntu-Regular' }}>
                        Itens disponíveis perto de você aparecerão aqui.
                    </Text>
                </View>
                
                {/* Aqui entrará a listagem de itens futuramente */}
            </ScrollView>
        </GradientBackground>
    );
};

export default Discover;