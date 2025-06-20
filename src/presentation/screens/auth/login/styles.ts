import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Fonts from '@fonts';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
        alignItems: 'center',
        paddingTop: insets.top + Dimens.marginPrimary2_5X,
        paddingBottom: insets.bottom + Dimens.marginPrimary2X,
        paddingHorizontal: Dimens.marginPrimary2X,
    },
    version: {
        ...Fonts.Subtitle,
    },
    formContainer: {
        flex: 1,
        width: '100%',
    },
    inputContainer: {
        marginTop: Dimens.marginPrimary2X,
    },
});
