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
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  description: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default styles;