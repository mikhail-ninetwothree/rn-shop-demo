import React from 'react';
import { useTheme } from '@rneui/themed';
import ButtonBase, { ButtonBaseProps } from '@components/button/ButtonBase';

export default ({ ...props }: ButtonBaseProps) => {
    const { theme } = useTheme();

    return (
        <ButtonBase
            defaultColor={theme.colors.danger}
            pressedColor={theme.colors.dangerDark}
            disabledColor={theme.colors.disabled}
            textDefaultColor={theme.colors.textWhite}
            textPressedColor={theme.colors.textWhite}
            textDisabledColor={theme.colors.textPrimaryLight}
            {...props}
        />
    );
};
