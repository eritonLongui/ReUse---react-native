import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
    justifyContent: 'center',
  },
  top: {
    marginBottom: spacing.xl,
  },
  title: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 40,
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 20,
    textAlign: 'center',
  },
  form: {
    minHeight: height * 0.35,
    justifyContent: 'center',
  },
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    borderRadius: 16,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    color: colors.primary,
    backgroundColor: 'rgba(255,255,255,0.10)',
    fontFamily: 'Ubuntu-Regular',
  },
  placeholderColor: {
    color: colors.textSecondary,
  },
  primaryButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginTop: spacing.sm,
  },
  primaryButtonText: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  secondaryButton: {
    marginTop: spacing.lg,
    alignItems: 'center',
    paddingVertical: spacing.sm,
  },
  secondaryButtonText: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 14,
    color: colors.primary,
  },
});

export default styles;