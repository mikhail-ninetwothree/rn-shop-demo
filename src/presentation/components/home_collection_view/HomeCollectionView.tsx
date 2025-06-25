import { Colors } from '@rneui/base';
import { useTheme } from '@rneui/themed';
import { Text, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StyleSheet } from 'react-native';
import { Product } from 'src/data/home/models/Product';
import { getString } from 'src/i18n/localization';
import Dimens from 'src/util/resources/Dimens';
import Fonts from 'src/util/resources/Fonts';
import { Strings } from 'src/util/resources/Strings';
import HomeCollectionCell from './HomeCollectionCell';
import { useNavigation } from '@react-navigation/native';
import Routes, { ProductDetailsScreenNavigationProp } from 'src/navigation/routes';
import { useRef } from 'react';

interface CollectionViewProps {
    data: Product[];
    batch: number;
    numberOfColumns: number;
    isLoadingMore: boolean;
    onLoadMore?: () => void;
}

export default ({ ...props }: CollectionViewProps) => {
    const navigation = useNavigation<ProductDetailsScreenNavigationProp>();
    const { width } = Dimensions.get('window');
    const horizontalItemSpacing = Dimens.marginPrimaryHalf1_25X;
    const itemWidth = (width - Dimens.marginPrimary2_5X * 2 - horizontalItemSpacing * (props.numberOfColumns - 1)) / props.numberOfColumns;
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors, itemWidth);
    
    const backgroundColorMap = useRef<Record<string, string>>({});
    const getOrCreateBgColor = (key: string) => {
        if (!backgroundColorMap.current[key]) {
            const randomBgColor = theme.colors.productBackgrounds[
                Math.floor(Math.random() * theme.colors.productBackgrounds.length)
            ];
            backgroundColorMap.current[key] = randomBgColor;
        }
        return backgroundColorMap.current[key];
    };

    const renderItem = ({ item: product }: { item: Product }) => {
        const bgColor = getOrCreateBgColor(product.id.toString());
        return (
            <TouchableOpacity onPress={() => handlePress(product, bgColor)}>
                <HomeCollectionCell product={product} style={styles.item} bgColor={bgColor}/>
            </TouchableOpacity>
        );
    };

    const handlePress = (product: Product, bgColor: string) => {
        navigation.navigate(Routes.ProductDetails, { product, bgColor });
    };

    return (
        <FlatList
            ListHeaderComponent={<Text style={styles.title}>{getString(Strings.homeTitle)}</Text>}
            data={props.data}
            keyExtractor={(product) => product.id.toString()}
            numColumns={props.numberOfColumns}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
            columnWrapperStyle={styles.row}
            removeClippedSubviews
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            windowSize={6}
            onEndReached={props.onLoadMore}
            onEndReachedThreshold={0.15}
            ListFooterComponent={props.isLoadingMore ? <ActivityIndicator color={theme.colors.primary}/> : null}
        />
    );
};

export const themedStyles = (colors: Colors, itemWidth: number) => StyleSheet.create({
    container: {
        paddingTop: Dimens.zero,
        paddingHorizontal: Dimens.marginPrimary2_5X,
    },
    title: {
        marginBottom: Dimens.marginPrimary1_25X,
        ...Fonts.H2,
        color: colors.textPrimary
    },
    row: {
        justifyContent: Dimens.spaceBetween,
        marginBottom: Dimens.marginPrimary,
    },
    item: {
        width: itemWidth
    }
});