import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';
import Fonts from '@fonts';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        alignItems: Dimens.alignCenter,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
    },
    backgroundImage: {
        flex: Dimens.fullFlex,
        position: Dimens.positionAbsolute,
    },
    environmentText: {
        ...Fonts.H1,
        color: colors.textPrimaryStrict, // could be changed to textPrimary if the app has only 1 theme
    },
    versionText: {
        ...Fonts.H3,
        marginTop: Dimens.marginPrimary2X,
        color: colors.textPrimaryStrict, // could be changed to textPrimary if the app has only 1 theme
    },
});
