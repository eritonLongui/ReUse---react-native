import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 180,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
  },
  text: {
    color: colors.light,
    fontSize: 18,
    fontFamily: 'Ubuntu-Bold',
  },
});

export default styles;