import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  headline: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 40,
    color: colors.primary,
    marginBottom: spacing.md,
    marginHorizontal: spacing.xl,
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
    lineHeight: 20,
    marginHorizontal: spacing.xl,
  },
});

export default styles;