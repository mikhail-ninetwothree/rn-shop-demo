import I18n, { getLanguages } from 'react-native-i18n';
import en from './locale/en';
import es from './locale/es';
import { Strings } from '@strings';
import { sprintf } from 'sprintf-js';

export enum Locale {
    SYSTEM = 'system',
    ENGLISH = 'en',
    SPANISH = 'es'
}

I18n.fallbacks = true;

I18n.translations = {
    en,
    es,
};

I18n.defaultLocale = Locale.ENGLISH;

export const preferredLocale = async (): Promise<Locale> => {
    const supportedLocales = Object.values(Locale);
    const preferredLanguages = await getLanguages();

    for (let lang of preferredLanguages) {
        const langCode = lang.split(/[-_]/)[0];

        if (supportedLocales.includes(langCode as Locale)) {
            return langCode as Locale;
        }
    }

    return I18n.defaultLocale as Locale;
};

export const getString = (key: Strings, ...args: any[]) => sprintf(I18n.t(key.valueOf()), ...args);

export default I18n;

export const getLocaleLabels = (): Record<Locale, string> => ({
    [Locale.SYSTEM]: getString(Strings.settingsLanguageSystem),
    [Locale.ENGLISH]: getString(Strings.settingsLanguageEnglish),
    [Locale.SPANISH]: getString(Strings.settingsLanguageSpanish),
});