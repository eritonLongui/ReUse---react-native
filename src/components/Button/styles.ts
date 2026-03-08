import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.sm,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    color: colors.light,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;