import React from 'react';
import { useTheme } from '@rneui/themed';
import Dimens from '@dimens';
import Icons from '@icons';
import { SvgProps } from 'react-native-svg';

export default ({ ...props }: SvgProps) => {
    const { theme } = useTheme();

    return (
        <Icons.Back
            width={Dimens.backBtnSize}
            height={Dimens.backBtnSize}
            fill={theme.colors.black}
            {...props}
        />
    );
};
