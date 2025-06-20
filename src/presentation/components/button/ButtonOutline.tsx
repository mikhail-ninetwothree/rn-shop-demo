import React from 'react';
import { useTheme } from '@rneui/themed';
import ButtonBase, { ButtonBaseProps } from '@components/button/ButtonBase';

export default ({ ...props }: ButtonBaseProps) => {
    const { theme } = useTheme();

    return (
        <ButtonBase
            defaultColor={theme.colors.white}
            pressedColor={theme.colors.disabledLight}
            disabledColor={theme.colors.disabledLight}
            textDefaultColor={theme.colors.textSecondary}
            textPressedColor={theme.colors.textSecondary}
            textDisabledColor={theme.colors.textSecondaryLight}
            borderColorDefault={theme.colors.greyOutline}
            borderColorPressed={theme.colors.greyOutline}
            borderColorDisabled={theme.colors.disabledLight}
            {...props}
        />
    );
};
