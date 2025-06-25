import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { themedStyles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getLocaleLabels, getString, Locale } from 'src/i18n/localization';
import { Strings } from 'src/util/resources/Strings';
import { useAppContext } from 'src/presentation/context/AppContext';
import IcBack from 'src/presentation/components/IcBack';
import { useNavigation } from '@react-navigation/native';
import { Spacer } from 'src/presentation/components/Spacer';
import Icons from 'src/util/resources/Icons';

export default () => {
    const { appState, changeAppLocale } = useAppContext();
    
    const locales = Object.values(Locale);
    const selectedLocale = appState.locale;
    const localeLabels = getLocaleLabels();

    const navigation = useNavigation();
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);

    const goBack = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={goBack}>
                    <IcBack/>
                </TouchableOpacity>
                <Text style={styles.title}>{getString(Strings.settingsTitle)}</Text>    
            </View>
            <View style={styles.content}>
                <Text style={styles.subtitle}>{getString(Strings.settingsLanguage)}</Text>
                <View style={styles.languageOptionsList}>
                    {locales.map(locale => (
                        <TouchableOpacity
                            key={locale}
                            onPress={() => changeAppLocale(locale)}>
                            <View style={[styles.languageOption, locale === selectedLocale ? styles.languageOptionSelected : null]}>
                                <Text style={styles.languageOptionTitle}>{localeLabels[locale]}</Text>
                                <Spacer/>
                                {locale === selectedLocale ? (<Icons.Check/>) : (<Icons.CheckEmpty/>)}
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};
