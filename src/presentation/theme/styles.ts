import { ButtonProps, Colors, TextProps, Theme } from '@rneui/themed';
import Fonts from '@fonts';
import Dimens from '@dimens';

declare type ThemeProp = {
    colors: Colors;
} & Theme;

export const buttonStyle = (props: Partial<ButtonProps>, theme: ThemeProp) => ({
    buttonStyle: {
        height: Dimens.btnHeight,
        backgroundColor: theme.colors.primary,
    },
    containerStyle: {
        borderRadius: Dimens.btnCornerRadius,
    },
    titleStyle: {
        fontSize: Dimens.fontSizeMedium,
        color: theme.colors.white,
    },
});

export const textStyle = (props: Partial<TextProps>, theme: ThemeProp) => ({
    style: {
        color: theme.colors.textPrimary,
        ...Fonts.Body,
    },
});
