import Dimens from '@dimens';
import { ActivityIndicator, StyleProp, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Colors, useTheme } from '@rneui/themed';
import FastImage, { ImageStyle } from 'react-native-fast-image';

interface CacheImageViewProps {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export default ({ ...props }: CacheImageViewProps) => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    const [isImageLoading, setImageLoading] = useState(true);

    return (
        <>
            <FastImage 
                style={[styles.image, props.style]}
                source={{uri: props.uri}}
                onLoadStart={() => setImageLoading(true)}
                onLoadEnd={() => setImageLoading(false)}/>
            {isImageLoading && (
                <ActivityIndicator style={styles.spinner}/>
            )}
        </>
    );
};

export const themedStyles = (colors: Colors) => StyleSheet.create({
    spinner: {
        ...StyleSheet.absoluteFillObject,
        color: colors.primary
    },
    image: {
        width: Dimens.full
    }
});
