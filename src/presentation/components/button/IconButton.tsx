import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Dimens from '@dimens';
import { ButtonBaseProps } from '@components/button/ButtonBase';

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
                            width={Dimens.btnIconSize}
                            height={Dimens.btnIconSize}
                            fill={contentColor}
                            opacity={props.iconOpacityDynamic && props.isDisabled ? Dimens.halfNum : Dimens.fullNum}
                        />}
                    </View>
                );
            }}
        </Pressable>
    );
};

const themedStyles = (isSmall: boolean = true, flex: number | undefined = undefined) => StyleSheet.create({
    button: {
        height: isSmall ? Dimens.btnHeightSmall : Dimens.btnHeight,
        borderRadius: isSmall ? Dimens.btnSmallCornerRadius : Dimens.btnCornerRadius,
        width: isSmall ? Dimens.btnHeightSmall : Dimens.btnHeight,
        alignItems: 'center',
        justifyContent: 'center',
        flex: flex,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});
