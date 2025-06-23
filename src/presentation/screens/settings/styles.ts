import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';

export const themedStyles = (colors: Colors) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
        alignItems: 'center',
        padding: Dimens.marginPrimary3X,
    },
});
