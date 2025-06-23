import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Fonts from '@fonts';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
    },
    background: {
        position: Dimens.positionAbsolute
    },
    title: {
        ...Fonts.H1,
        color: colors.textPrimary,
        marginBottom: Dimens.marginPrimaryHalf
    },
    subtitleContainer: {
        flexDirection: Dimens.horizontal,
        alignItems: Dimens.alignCenter,
        marginBottom: Dimens.marginPrimary2_25X
    },
    subtitle: {
        ...Fonts.H4,
        color: colors.textPrimary,
        marginRight: Dimens.marginPrimary1_25X
    },
    content: {
        flex: Dimens.fullFlex,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: Dimens.marginPrimary2_5X
    },
    formContainer: {

    },
    inputContainer: {
        marginBottom: Dimens.marginPrimary
    }
});
