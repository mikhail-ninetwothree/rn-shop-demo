import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Fonts from '@fonts';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: Dimens.marginPrimary2_5X
    },
    centerContent: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
        transform: [{ translateY: -Dimens.marginPrimary4X }],
        alignItems: Dimens.alignCenter,
        justifyContent: Dimens.alignCenter
    },
    circle: {
        width: Dimens.welcomeIcSize,
        height: Dimens.welcomeIcSize,
        borderRadius: Dimens.welcomeIcSize / 2,
        shadowColor: colors.shadowPrimary,
        shadowOffset: { width: Dimens.offsetZero, height: Dimens.offsetSmallest },
        shadowOpacity: 0.16,
        shadowRadius: Dimens.radiusSmall,
        backgroundColor: colors.surface,
        alignItems: Dimens.alignCenter,
        justifyContent: Dimens.alignCenter
    },
    welcomeTitle: {
        paddingTop: Dimens.marginPrimary3X,
        ...Fonts.H1,
        color: colors.textPrimary
    },
    welcomeSubtitle: {
        paddingTop: Dimens.marginPrimary2_25X,
        ...Fonts.H4,
        color: colors.textPrimary,
        textAlign: Dimens.alignCenter
    },
    buttonContainer: {
        position: Dimens.positionAbsolute,
        width: Dimens.full,
        bottom: insets.bottom + Dimens.marginPrimary11X,
        alignSelf: Dimens.alignCenter
    }
});
