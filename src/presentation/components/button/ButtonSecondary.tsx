import React from 'react';
import { useTheme } from '@rneui/themed';
import ButtonBase, { ButtonBaseProps } from '@components/button/ButtonBase';

export default ({ ...props }: ButtonBaseProps) => {
    const { theme } = useTheme();

    return (
        <ButtonBase
            defaultColor={theme.colors.secondary}
            pressedColor={theme.colors.secondaryDark}
            disabledColor={theme.colors.disabled}
            textDefaultColor={theme.colors.textAppPrimary}
            textPressedColor={theme.colors.textAppPrimaryDark}
            textDisabledColor={theme.colors.textPrimaryLight}
            {...props}
        />
    );
};
