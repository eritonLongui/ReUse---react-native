import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightMedium,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
});

export default styles;