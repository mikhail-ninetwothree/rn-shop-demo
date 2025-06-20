import React from 'react';
import { ButtonBaseProps } from '@components/button/ButtonBase';
import { useTheme } from '@rneui/themed';
import IconButton from '@components/button/IconButton';

export default ({ ...props }: ButtonBaseProps) => {
    const { theme } = useTheme();

    return (
        <IconButton
            defaultColor={theme.colors.white}
            pressedColor={theme.colors.disabledLight}
            disabledColor={theme.colors.disabledLight}
            borderColorDefault={theme.colors.greyOutline}
            borderColorPressed={theme.colors.greyOutline}
            borderColorDisabled={theme.colors.disabledLight}
            {...props}/>
    );
};
