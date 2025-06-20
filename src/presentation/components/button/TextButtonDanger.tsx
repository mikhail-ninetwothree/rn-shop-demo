import React from 'react';
import { useTheme } from '@rneui/themed';
import TextButtonBase, { TextButtonBaseProps } from '@components/button/TextButtonBase';

export default ({ ...props }: TextButtonBaseProps) => {
    const { theme } = useTheme();

    return (
        <TextButtonBase
            textDefaultColor={theme.colors.dangerDark}
            textPressedColor={theme.colors.dangerLight}
            textDisabledColor={theme.colors.textSecondaryLight}
            {...props}
        />
    );
};
