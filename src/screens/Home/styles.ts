import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  top: {
    height: height,
    marginVertical: spacing.xl,
    display: 'flex',
    justifyContent: 'space-between',
  },
  hero: {
    height: height * 0.4,
  },
  headline: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 40,
    color: colors.primary,
    marginBottom: spacing.md,
    marginHorizontal: spacing.xl,
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: 20,
    marginHorizontal: spacing.xl,
  },
  bottom: {
    height: height * 0.7,
    flexGrow: 1,
    paddingTop: spacing.xl,
    justifyContent: 'space-between',
  },
});

export default styles;