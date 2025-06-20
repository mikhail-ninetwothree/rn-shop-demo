import React from 'react';
import { Text } from '@rneui/themed';
import { ColorValue, DimensionValue, Pressable, PressableProps, StyleSheet, View } from 'react-native';
import Dimens from '@dimens';
import Fonts from '@fonts';
import { SvgProps } from 'react-native-svg';

export interface ButtonBaseProps extends PressableProps {
    onClick: () => void,
    isDisabled?: boolean,
    title?: string,
    IconSvg?: React.FC<SvgProps>;
    defaultColor?: ColorValue,
    pressedColor?: ColorValue,
    disabledColor?: ColorValue,
    textDefaultColor?: ColorValue,
    textPressedColor?: ColorValue,
    textDisabledColor?: ColorValue,
    borderColorDefault?: ColorValue,
    borderColorPressed?: ColorValue,
    borderColorDisabled?: ColorValue,
    iconOpacityDynamic?: boolean,
    marginTop?: DimensionValue,
    marginBottom?: DimensionValue,
    marginStart?: DimensionValue,
    marginEnd?: DimensionValue,
    isSmall?: boolean,
    flex?: number,
}

export default ({ onClick, IconSvg, ...props }: ButtonBaseProps) => {
    const styles = themedStyles(props.isSmall, props.flex);

    return (
        <Pressable
            onPress={props.isDisabled ? null : onClick}
            disabled={props.isDisabled}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: props.isDisabled
                        ? props.disabledColor
                        : pressed
                            ? props.pressedColor
                            : props.defaultColor,
                    borderColor: props.isDisabled
                        ? props.borderColorDisabled
                        : pressed
                            ? props.borderColorPressed
                            : props.borderColorDefault,
                    borderWidth: props.borderColorDefault ? Dimens.borderWidth : Dimens.zero,
                    marginTop: props.marginTop,
                    marginBottom: props.marginBottom,
                    marginStart: props.marginStart,
                    marginEnd: props.marginEnd,
                },
            ]}
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
                            width={props.isSmall ? Dimens.textBtnIconSize : Dimens.btnIconSize}
                            height={props.isSmall ? Dimens.textBtnIconSize : Dimens.btnIconSize}
                            fill={contentColor}
                            style={styles.icon}
                            opacity={props.iconOpacityDynamic && props.isDisabled ? Dimens.halfNum : Dimens.fullNum}
                        />}
                        <Text style={[styles.title, { color: contentColor }]}>
                            {props.title}
                        </Text>
                    </View>
                );
            }}
        </Pressable>
    );
};

const themedStyles = (isSmall: boolean = false, flex: number | undefined = undefined) => StyleSheet.create({
    button: {
        height: isSmall ? Dimens.btnHeightSmall : Dimens.btnHeight,
        borderRadius: isSmall ? Dimens.btnSmallCornerRadius : Dimens.btnCornerRadius,
        width: isSmall ? undefined : Dimens.full,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: isSmall ? 'baseline' : undefined,
        paddingHorizontal: isSmall ? Dimens.marginPrimary1_5X : Dimens.zero,
        flex: flex,
    },
    title: {
        ...Fonts.Subtitle,
    },
    icon: {
        marginRight: isSmall ? Dimens.marginPrimaryHalf : Dimens.marginPrimary,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
