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
        color: colors.textTetriary
    },
    avatarShadowContainer: {
        marginTop: Dimens.marginPrimary2_25X,
        width: Dimens.avatarSize,
        aspectRatio: 1,
        borderRadius: Dimens.avatarSize / 2,
        shadowColor: colors.shadowPrimary,
        shadowOffset: { width: Dimens.offsetZero, height: Dimens.offsetZero },
        shadowOpacity: 0.16,
        shadowRadius: Dimens.radiusSmallest1_5X,
        backgroundColor: colors.surface,
        padding: Dimens.marginPrimaryHalf1_5X
    },
    avatarClipContainer: {
        flex: Dimens.fullFlex,
        borderRadius: Dimens.avatarSize / 2,
        overflow: Dimens.overFlowHidden
    },
    nameAndGender: {
        marginTop: Dimens.marginPrimary2X,
        flexDirection: Dimens.horizontal,
        alignItems: Dimens.alignFlexEnd
    },
    name: {
        ...Fonts.H3_1,
        color: colors.textTetriary
    },
    gender: {
        marginLeft: Dimens.marginPrimary,
        marginBottom: Dimens.marginPrimaryThird,
        ...Fonts.H6,
        color: colors.textTetriary
    },
    details: {
        marginTop: Dimens.marginPrimary,
        ...Fonts.H6,
        color: colors.textTetriary
    }
});
