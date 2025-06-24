import Dimens from '@dimens';
import { Animated, Dimensions, FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import React, { useRef } from 'react';
import { Colors, useTheme } from '@rneui/themed';
import CacheImageView from './CacheImageView';

interface ImageCarouselProps {
    images: string[];
    style?: ViewStyle;
}

export default ({ ...props }: ImageCarouselProps) => {
    const { width } = Dimensions.get('window');
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors, width);
    const scrollX = useRef(new Animated.Value(0)).current;
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX }}}],
        { useNativeDriver: false }
    );
    const renderItem = ({ item }: { item: string }) => (
        <CacheImageView
            uri={item}
            style={styles.image}/>
    );
    return (
        <View>
            {props.images && props.images.length > 0 && (
                <FlatList
                    style={props.style}
                    data={props.images}
                    horizontal
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    onScroll={onScroll}
                    scrollEventThrottle={16}
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}>
                </FlatList>
            )}
            {props.images && props.images.length > 1 && (
                <View style={styles.dotsContainer}>
                    {props.images.map((_, index) => {
                        const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 40, 10],
                            extrapolate: 'clamp',
                        });
                        const dotOpacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.2, 1, 0.2],
                            extrapolate: 'clamp',
                        });
                        return (
                            <Animated.View
                                key={index}
                                style={[styles.dot, { opacity: dotOpacity, width: dotWidth }]}/>
                        );
                    })}
                </View>
            )}
        </View>
    );
};

export const themedStyles = (colors: Colors, width: number) => StyleSheet.create({
    image: {
        width: width,
        aspectRatio: 0.85
    },
    dotsContainer: {
        position: Dimens.positionAbsolute,
        bottom: Dimens.marginPrimary1_25X, 
        left: Dimens.zero, 
        right: Dimens.zero,
        justifyContent: Dimens.alignCenter,
        alignItems: Dimens.alignCenter,
        flexDirection: Dimens.horizontal
    },
    dot: {
        marginHorizontal: Dimens.marginPrimaryHalf1_25X,
        width: Dimens.dotSize,
        height: Dimens.dotSize,
        borderRadius: Dimens.radiusSmallest1_5X,
        backgroundColor: colors.primary,
        opacity: 0.2        
    },
    activeDot: {
        width: Dimens.activeDotWidth,
        opacity: 1
    }
});
