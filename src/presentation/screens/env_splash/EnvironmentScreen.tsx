import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { Strings } from '@strings';
import { getString } from '@localization';
import { themedStyles } from './styles';
import { Spacer } from '@components/Spacer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { appVersion, flavor } from '@util/appInfo';
import Images from '@images';

export default () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);

    return (
        <>
            <Images.EnvironmentBackground style={styles.backgroundImage}/>
            <View style={styles.container}>
                <Spacer/>
                <Text style={styles.environmentText}>{getString(Strings.envSplashTTitle, flavor?.toUpperCase())}</Text>
                <Text style={styles.versionText}>{getString(Strings.envSplashTVersion, appVersion)}</Text>
                <Spacer/>
            </View>
        </>
    );
};
