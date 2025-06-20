import React from 'react';
import { Text } from '@rneui/themed';
import { ColorValue, DimensionValue, Pressable, PressableProps, StyleSheet, View } from 'react-native';
import Dimens from '@dimens';
import Fonts from '@fonts';
import { SvgProps } from 'react-native-svg';

export interface TextButtonBaseProps extends PressableProps {
    onClick: () => void,
    isDisabled?: boolean,
    title: string,
    IconSvg?: React.FC<SvgProps>;
    RightIconSvg?: React.FC<SvgProps>;
    textDefaultColor?: ColorValue,
    textPressedColor?: ColorValue,
    textDisabledColor?: ColorValue,
    marginTop?: DimensionValue,
    marginStart?: DimensionValue,
    isSmall?: boolean,
}

export default ({ onClick, IconSvg, RightIconSvg, ...props }: TextButtonBaseProps) => {
    return (
        <Pressable
            onPress={props.isDisabled ? null : onClick}
            disabled={props.isDisabled}
            style={[styles.pressable, { marginTop: props.marginTop, marginStart: props.marginStart }]}
            {...props}
        >
            {({ pressed }) => {
                const contentColor = props.isDisabled
                    ? props.textDisabledColor
                    : pressed
                        ? props.textPressedColor
                        : props.textDefaultColor;

                return (
                    <View style={styles.content}>
                        {IconSvg && <IconSvg
                            width={Dimens.textBtnIconSize}
                            height={Dimens.textBtnIconSize}
                            fill={contentColor}
                            style={styles.icon}
                        />}
                        <Text style={[props.isSmall ? styles.titleSmall : styles.title, { color: contentColor }]}>
                            {props.title}
                        </Text>
                        {RightIconSvg && <RightIconSvg
                            width={Dimens.textBtnIconSize}
                            height={Dimens.textBtnIconSize}
                            fill={contentColor}
                            style={styles.icon}
                        />}
                    </View>
                );
            }}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressable: {
        padding: Dimens.marginPrimary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        ...Fonts.Subtitle,
    },
    titleSmall: {
        ...Fonts.SubtitleSmall,
    },
    icon: {
        marginRight: Dimens.marginPrimaryHalf,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
