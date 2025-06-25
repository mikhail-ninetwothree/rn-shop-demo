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
        flex: Dimens.fullFlex,
    },
    carousel: {
        marginTop: insets.top
    },
    backBtn: {
        position: Dimens.positionAbsolute,
        top: insets.top
    },
    spinner: {
        ...StyleSheet.absoluteFillObject
    },
    content: {
        marginTop: Dimens.marginPrimary2_25X,
        marginHorizontal: Dimens.marginPrimary2_5X,
        marginBottom: insets.bottom + Dimens.marginPrimary2_25X
    },
    detailsContainer: {
        flexDirection: Dimens.horizontal
    },
    details: {
        marginTop: Dimens.marginPrimary1_25X,
        ...Fonts.Caption,
        color: colors.textTetriary,
        textAlign: Dimens.alignRight
    },
    priceWithDiscount: {
        ...Fonts.H2_5,
        color: colors.textTetriary,
        letterSpacing: -.26,
    },
    discountPricesContainer: {
        flexDirection: Dimens.horizontal,
        marginTop: Dimens.marginPrimaryThird
    },
    realPrice: {
        marginTop: Dimens.marginPrimaryQuarter,
        ...Fonts.Subtitle3,
        color: colors.originalPrice,
        letterSpacing: .17,
        textDecorationLine: 'line-through'
    },
    discount: {
        marginLeft: Dimens.marginPrimaryHalf1_5X
    },
    title: {
        marginTop: Dimens.marginPrimary1_25X,
        ...Fonts.H2,
        color: colors.textTetriary        
    },
    description: {
        marginTop: Dimens.marginPrimary1_25X,
        ...Fonts.H6,
        color: colors.textTetriary        
    },
    ratingsAndReviews: {
        marginTop: Dimens.marginPrimary1_25X,
        ...Fonts.H3_1,
        color: colors.textTetriary  
    },
    rating: {
        alignItems: Dimens.alignFlexStart,
    },
    ratingContainer: {
        marginTop: Dimens.marginPrimary,
        flexDirection: Dimens.horizontal,
    },
    ratingValue: {
        marginLeft: Dimens.marginPrimary1_75X,
        borderRadius: Dimens.radiusSmaller,
        backgroundColor: colors.ratingBackground
    },
    ratingText: {
        marginVertical: Dimens.marginPrimaryQuarter,
        marginHorizontal: Dimens.marginPrimaryHalf1_5X,
        ...Fonts.Subtitle2
    }
});
