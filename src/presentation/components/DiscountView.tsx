import { Colors, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Dimens from '@dimens';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '@rneui/base';
import Fonts from 'src/util/resources/Fonts';

interface Props {
    text: string;
    style?: ViewStyle;
}

const DiscountView: React.FC<Props> = ({
    text,
    style
}) => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    return (
        <LinearGradient
            colors={theme.colors.discountGradient}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}   
            style={[styles.container, style]}>
            <Text style={styles.text}>{text}</Text>
        </LinearGradient>
    );
};

const themedStyles = (colors: Colors) => StyleSheet.create({
    container: {
        borderTopLeftRadius: Dimens.radiusSmallest1_5X,
        borderTopRightRadius: Dimens.radiusSmallest1_5X,
        borderBottomLeftRadius: Dimens.radiusSmallest1_5X
    },
    text: {
        ...Fonts.SubtitleSmaller,
        color: colors.textWhite,
        paddingVertical: Dimens.marginPrimaryQuarter,
        paddingHorizontal: Dimens.marginPrimaryHalf
    }
});

export default DiscountView;