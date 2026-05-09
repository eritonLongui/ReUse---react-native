import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import GradientBackground from '../../components/GradientBackground';
import { colors } from '../../styles/colors';

const SearchScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>Pesquisa</Text>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
    color: colors.primary,
  },
});

export default SearchScreen;
