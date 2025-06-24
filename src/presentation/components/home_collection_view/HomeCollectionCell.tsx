import { Colors } from "@rneui/base";
import { Text, useTheme } from "@rneui/themed";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { formatDiscount, formatPrice, formatRealPrice, Product } from "src/data/home/models/Product";
import Dimens from "src/util/resources/Dimens";
import Fonts from "src/util/resources/Fonts";
import DiscountView from '../DiscountView';
import CacheImageView from '../CacheImageView';

type Props = {
    product: Product;
    style?: StyleProp<ViewStyle>;
    bgColor: string;
};

const HomeCollectionCell: React.FC<Props> = ({ product, style, bgColor }) => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    
    return (
        <View style={style}>
            <View style={styles.imageContainer}>
                <CacheImageView 
                    uri={product.thumbnail}
                    style={[styles.image, { backgroundColor: bgColor }]}/>
                <DiscountView 
                    text={formatDiscount(product.discountPercentage)} 
                    style={styles.discount}/>
            </View>
            <Text style={styles.productTitle}>{product.title}</Text>
            <View style={styles.pricesContainer}>
                <Text style={styles.priceWithDiscount}>{formatPrice(product.price)}</Text>
                <Text style={styles.realPrice}>{formatRealPrice(product.price, product.discountPercentage)}</Text>
            </View>
        </View>
    );
};

export const themedStyles = (colors: Colors) => StyleSheet.create({
    imageContainer: {
        backgroundColor: colors.surface,
        padding: Dimens.marginPrimaryHalf1_25X,
        borderRadius: Dimens.radiusSmall1_5X,
        shadowColor: colors.shadowPrimary,
        shadowOffset: { width: Dimens.offsetZero, height: Dimens.offsetSmaller },
        shadowOpacity: 0.1,
        shadowRadius: Dimens.radiusNormal
    },
    spinner: {
        ...StyleSheet.absoluteFillObject
    },
    image: {
        borderRadius: Dimens.radiusSmallest1_5X,
        aspectRatio: 0.911
    },
    discount: {
        position: Dimens.positionAbsolute,
        top: Dimens.marginPrimaryHalf1_25X,
        right: Dimens.marginPrimaryHalf1_25X,
    },
    productTitle: {
        marginTop: Dimens.marginPrimaryHalf1_5X,
        ...Fonts.Caption,
        color: colors.black
    },
    pricesContainer: {
        marginTop: Dimens.marginPrimaryHalf,
        flexDirection: Dimens.horizontal,
        alignItems: Dimens.alignCenter,
    },
    priceWithDiscount: {
        ...Fonts.Subtitle,
        color: colors.textPrimary,
        letterSpacing: -.17,
    },
    realPrice: {
        marginLeft: Dimens.marginPrimaryHalf,
        ...Fonts.Subtitle2,
        color: colors.originalPrice,
        letterSpacing: -.14,
        textDecorationLine: 'line-through'
    }
});

export default HomeCollectionCell;