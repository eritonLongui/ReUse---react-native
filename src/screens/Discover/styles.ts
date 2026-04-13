import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingTop: spacing.xl,
  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottom: {
    flexGrow: 1,
    paddingTop: spacing.xl,
    gap: spacing.xl,
    justifyContent: 'flex-end',
  },

  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
});

export default styles;