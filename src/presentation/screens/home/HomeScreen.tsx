import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Strings } from '@strings';
import { getString } from '@localization';
import { themedStyles } from './styles';
import { Spacer } from '@components/Spacer';
import { useAppContext } from '@context/AppContext';
import ButtonPrimary from '@components/button/ButtonPrimary';
import useCancelActionBottomSheet from '@components/bottom_sheet/hooks/useCancelActionBottomSheet';
import Icons from '@icons';

export default () => {
    const { logOut } = useAppContext();
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    const { openCancelActionBottomSheet } = useCancelActionBottomSheet();

    const handleLogoutClick = () => {
        openCancelActionBottomSheet({
            title: getString(Strings.homeBtnLogout),
            ImageSvg: Icons.Terminal,
            btnPrimaryTitle: getString(Strings.homeBtnLogout),
            onCancelClick: logOut,
        });
    };

    return (
        <View style={styles.container}>
            <Spacer />
            <Text>Home</Text>
            <Spacer />
            <ButtonPrimary
                title={getString(Strings.homeBtnLogout)}
                onClick={handleLogoutClick}
            />
        </View>
    );
};
