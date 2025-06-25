import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';
import Fonts from 'src/util/resources/Fonts';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
    },
    navigationBar: {
        marginTop: insets.top,
        flexDirection: Dimens.horizontal,
        alignItems: Dimens.alignCenter
    },
    title: {
        ...Fonts.H2,
        color: colors.textPrimary
    },
    content: {
        marginHorizontal: Dimens.marginPrimary2_5X,
    },
    subtitle: {
        marginTop: Dimens.marginPrimaryHalf1_75X,
        ...Fonts.Caption4,
        color: colors.textPrimary
    },
    languageOptionsList: {
        marginTop: Dimens.marginPrimary3X,
        flexDirection: Dimens.column, 
        gap: Dimens.marginPrimaryHalf1_5X
    },
    languageOption: {
        padding: Dimens.marginPrimary1_25X,
        flexDirection: Dimens.horizontal,
        backgroundColor: colors.languageBackground, 
        borderRadius: Dimens.radiusSmall1_5X,
        alignItems: Dimens.alignCenter
    },
    languageOptionSelected: {
        backgroundColor: colors.languageBackgroundSelected,
    },
    languageOptionTitle: {
        marginLeft: Dimens.marginPrimary1_25X,
        ...Fonts.Caption2,
        color: colors.textTetriary
    }
});
