import Dimens from '@dimens';
import { DimensionValue, StyleSheet, View } from 'react-native';
import React from 'react';
import { Colors, useTheme } from '@rneui/themed';

interface DividerProps {
    marginTop?: DimensionValue;
    marginBottom?: DimensionValue;
    marginStart?: DimensionValue;
    marginEnd?: DimensionValue;
}

export default ({ ...props }: DividerProps) => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    return (<View style={[styles.vDivider, {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginStart: props.marginStart,
        marginEnd: props.marginEnd,
    }]}/>);
};

export const themedStyles = (colors: Colors) => StyleSheet.create({
    vDivider: {
        backgroundColor: colors.greyOutline,
        height: Dimens.dividerHeight,
        width: Dimens.full,
    },
});
