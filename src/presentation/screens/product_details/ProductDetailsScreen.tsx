import { useTheme } from '@rneui/themed';
import { View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { themedStyles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from 'react-native-gesture-handler';
import { ProductDetailsScreenRouteProp } from 'src/navigation/routes';
import { useNavigation, useRoute } from '@react-navigation/native';
import IcBack from 'src/presentation/components/IcBack';
import { formatDiscount, formatPrice, formatRealPrice } from 'src/data/home/models/Product';
import DiscountView from 'src/presentation/components/DiscountView';
import ImageCarousel from 'src/presentation/components/ImageCarousel';
import { Rating } from 'react-native-ratings';
import { getString } from '@localization';
import { Strings } from 'src/util/resources/Strings';
import { Spacer } from 'src/presentation/components/Spacer';

export default () => {
    const navigation = useNavigation();
    const route = useRoute<ProductDetailsScreenRouteProp>();
    const { product, bgColor } = route.params;

    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
       
    const goBack = () => navigation.goBack();

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <ImageCarousel 
                    images={product.images}
                    style={{backgroundColor: bgColor}}/>
                <TouchableOpacity onPress={goBack} style={styles.backBtn}>
                    <IcBack/>
                </TouchableOpacity>
                <View style={styles.content}>
                    <View style={styles.detailsContainer}>
                        <View>
                            <Text style={styles.priceWithDiscount}>{formatPrice(product.price)}</Text>
                            <View style={styles.discountPricesContainer}>
                                <Text style={styles.realPrice}>{formatRealPrice(product.price, product.discountPercentage)}</Text>
                                <DiscountView
                                    text={formatDiscount(product.discountPercentage)} 
                                    style={styles.discount}/>
                            </View>
                        </View>
                        <Spacer/>
                        <View>
                            <Text style={styles.details}>{`${getString(Strings.availability)} ${product.availabilityStatus} (${product.stock})`}</Text>
                            <Text style={styles.details}>{`${getString(Strings.shipping)} ${product.shippingInformation}`}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.ratingsAndReviews}>{getString(Strings.ratingsAndReviews)}</Text>
                    <View style={styles.ratingContainer}>
                        <View>
                            <Rating
                                style={styles.rating}
                                type='custom'
                                readonly
                                startingValue={product.rating}
                                ratingColor={theme.colors.rating}
                                tintColor={theme.colors.surface}
                                imageSize={20}/>
                        </View>
                        <View style={styles.ratingValue}>
                            <Text style={styles.ratingText}>{`${product.rating}/5`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};
