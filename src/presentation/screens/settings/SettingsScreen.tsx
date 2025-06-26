import React, { useEffect, useState } from 'react';
import { Text, useTheme } from '@rneui/themed';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { themedStyles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getLocaleLabels, getString } from 'src/i18n/localization';
import { Strings } from 'src/util/resources/Strings';
import Divider from 'src/presentation/components/Divider';
import Icons from 'src/util/resources/Icons';
import { Spacer } from 'src/presentation/components/Spacer';
import { useAppContext } from 'src/presentation/context/AppContext';
import ButtonPrimary from 'src/presentation/components/button/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import Routes, { SettingsScreenNavigationProp } from 'src/navigation/routes';
import SwitchPrimary from 'src/presentation/components/SwitchPrimary';
import { AppTheme } from 'src/presentation/theme/appTheme';
import FastImage from 'react-native-fast-image';

export default () => {
    const navigation = useNavigation<SettingsScreenNavigationProp>();

    const { appState, logOut, changeAppTheme } = useAppContext();
    const language = getLocaleLabels()[appState.locale];
    
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);

    const [isDarkModeEnabled, setDarkModeEnabled] = useState(appState.theme === AppTheme.DARK);
    const toggleSwitch = () => {
        changeAppTheme(isDarkModeEnabled ? AppTheme.LIGHT : AppTheme.DARK);
        setDarkModeEnabled(previous => !previous);
    }
    useEffect(() => {
        setDarkModeEnabled(appState.theme === AppTheme.DARK);
    }, [appState.theme]);
    
    const openProfile = () => {
        navigation.navigate(Routes.Profile);
    };
    const openLanguageSettings = () => {
        navigation.navigate(Routes.LanguageSettings);
    };
    const handleLogoutClick = () => {
        Alert.alert(
            getString(Strings.settingsLogoutTitle), 
            '', 
            [
                {
                    text: getString(Strings.cancel),
                    style: 'cancel'
                },
                {
                    text: getString(Strings.settingsLogout),
                    onPress: () => {
                        FastImage.clearMemoryCache();
                        FastImage.clearDiskCache();
                        logOut();
                    },
                    style: 'default'
                }
            ],
            { cancelable: true }
        );
    };

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>{getString(Strings.settingsTitle)}</Text>
                <Text style={styles.sectionTitle}>{getString(Strings.settingsPersonal)}</Text>
                <TouchableOpacity onPress={openProfile}>
                    <View style={styles.sectionItem}>
                        <Text style={styles.sectionItemTitle}>{getString(Strings.settingsProfile)}</Text>
                        <Spacer/>
                        <Icons.RightArrow style={styles.rightArrow} color={theme.colors.rightArrow} />
                    </View>
                </TouchableOpacity>
                <Divider/>
                <Text style={styles.sectionTitle}>{getString(Strings.settingsAccount)}</Text>
                <TouchableOpacity onPress={openLanguageSettings}>
                    <View style={styles.sectionItem}>
                        <Text style={styles.sectionItemTitle}>{getString(Strings.settingsLanguage)}</Text>
                        <Spacer/>
                        <Text style={styles.sectionItemSubtitle}>{language}</Text>
                        <Icons.RightArrow style={styles.rightArrow} color={theme.colors.rightArrow}/>
                    </View>
                </TouchableOpacity>
                <Divider/>
                <View style={styles.sectionItem}>
                    <Text style={styles.sectionItemTitle}>{getString(Strings.settingsTheme)}</Text>
                    <Spacer/>
                    <SwitchPrimary
                        value={isDarkModeEnabled}
                        onToggle={toggleSwitch}/>
                </View>
                <View style={styles.logoutButton}>
                    <ButtonPrimary
                        title={getString(Strings.settingsLogout)}
                        onClick={handleLogoutClick}/>    
                </View>
            </View>
        </ScrollView>
    );
};
