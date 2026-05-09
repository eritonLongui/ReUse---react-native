import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  top: {
    marginVertical: spacing.xl,
    display: 'flex',
    justifyContent: 'space-between',
  },
  hero: {
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
    paddingTop: spacing.xl,
    justifyContent: 'space-between',
  },
});

export default styles;