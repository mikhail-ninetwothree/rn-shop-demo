import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { themedStyles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CollectionView from 'src/presentation/components/home_collection_view/HomeCollectionView';
import { useHome } from './hooks/useHome';
import FullscreenProgress from 'src/presentation/components/FullscreenProgress';
import { Product } from 'src/data/home/models/Product';
import useAlert from 'src/presentation/hooks/useAlert';
import { PaginationData } from 'src/data/home/models/PaginationData';

const initialData: PaginationData = {
    limit: 20,
    page: 0
};

export default () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
    const { showAlert } = useAlert();

    // pagination
    const [pageData, setPageData] = useState(initialData);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    
    // hook
    const { getProducts, isPending } = useHome();
    const [totalProducts, setProducts] = useState<Product[]>([]);

    // load next pages
    const loadingRef = useRef(false);
    const loadMoreProducts = async () => {
        if (loadingRef.current || !hasMore) return;
        loadingRef.current = true;
        setIsLoadingMore(true);
        try {
            const result = await getProducts(pageData);
            if (result.products.length === 0) {
                setHasMore(false);
            } else {
                setProducts(prev => {
                    const seen = new Set(prev.map(product => product.id));
                    const newUnique = result.products.filter(product => !seen.has(product.id));
                    return [...prev, ...newUnique];
                });
                setPageData((prev) => ({ ...prev, page: prev.page + 1 }));
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.log('Get products error: ' + error.message);
                showAlert(error.message);
            } else {
                console.log('Get products error:', error);
                showAlert('An unknown error occurred');
            }
        }
        loadingRef.current = false;
        setIsLoadingMore(false);
    };

    useEffect(() => {
        // initial load
        loadMoreProducts();
    }, []);
       
    return (
        <View style={styles.container}>
            <CollectionView
                data={totalProducts} 
                batch={pageData.limit}
                numberOfColumns={2}
                isLoadingMore={pageData.page === 0 ? false : isLoadingMore}
                onLoadMore={loadMoreProducts}
            />
            {isPending && pageData.page === 0 && <FullscreenProgress/>}
        </View>
    );
};
