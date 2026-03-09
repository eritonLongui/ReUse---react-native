import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { spacing } from '../../styles/spacing';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    fundo: {
        height: height * 0.25,
        backgroundColor: colors.lightMedium,
        justifyContent: 'flex-end',
        position: 'relative',
        paddingBottom: spacing.xl,
    },
    logo: {
        position: 'absolute',
        top: -height * 0.22,
    },
    text: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 14,
        color: colors.textSecondary,
        textAlign: 'center',
    },
})

export default styles;