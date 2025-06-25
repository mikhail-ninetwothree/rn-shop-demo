import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';
import Fonts from 'src/util/resources/Fonts';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    scrollView: {
        backgroundColor: colors.surface
    },
    container: {
        marginTop: insets.top,
        marginHorizontal: Dimens.marginPrimary2_5X,
    },
    title: {
        ...Fonts.H2,
        color: colors.textPrimary
    }, 
    sectionTitle: {
        marginTop: Dimens.marginPrimary4_25X,
        ...Fonts.H3_1,
        color: colors.textPrimary
    },
    sectionItem: {
        marginTop: Dimens.marginPrimary,
        paddingVertical: 25,
        flexDirection: Dimens.horizontal,
        alignItems: Dimens.alignCenter
    },
    sectionItemTitle: {
        ...Fonts.Caption2,
        color: colors.textTetriary
    },
    sectionItemSubtitle: {
        ...Fonts.Caption3,
        color: colors.textTetriary
    },
    rightArrow: {
        marginLeft: Dimens.marginPrimary2X
    },
    logoutButton: {
        marginTop: Dimens.marginPrimary4_25X
    }
});
