import EncryptedStorage from 'react-native-encrypted-storage';
import { AppTheme } from '@theme/appTheme';
import { Locale } from '@localization';
import { runSafely } from '@util/functionUtils';

const AUTH_TOKEN = 'auth_token';
const IS_USER_LOGGED_IN = 'is_user_logged_in';
const APP_THEME = 'app_theme';
const APP_LOCALE = 'app_locale';

export async function setAuthToken(token: string) {
    await runSafely(
        () => EncryptedStorage.setItem(AUTH_TOKEN, token),
        'Failed to save the auth token'
    );
}

export async function getAuthToken(): Promise<string | null> {
    return await runSafely(
        () => EncryptedStorage.getItem(AUTH_TOKEN),
        'Failed to retrieve the auth token',
        null
    );
}

export async function setIsUserLoggedIn(loggedIn: boolean) {
    await runSafely(
        () => EncryptedStorage.setItem(IS_USER_LOGGED_IN, JSON.stringify(loggedIn)),
        'Failed to save the logged in value'
    );
}

export async function isLoggedIn(): Promise<boolean> {
    const isUserLoggedIn = await runSafely(
        () => EncryptedStorage.getItem(IS_USER_LOGGED_IN),
        'Failed to retrieve the logged in value',
        null
    );

    return isUserLoggedIn ? JSON.parse(isUserLoggedIn) : false;
}

export async function setAppTheme(theme: AppTheme) {
    await runSafely(
        () => EncryptedStorage.setItem(APP_THEME, theme.valueOf()),
        'Failed to save the App Theme'
    );
}

export async function getAppTheme(): Promise<AppTheme> {
    const theme = await runSafely(
        () => EncryptedStorage.getItem(APP_THEME),
        'Failed to retrieve the App Theme',
        AppTheme.SYSTEM
    );

    return theme && Object.values(AppTheme).includes(theme as AppTheme) ? theme as AppTheme : AppTheme.SYSTEM;
}

export async function setAppLocale(locale: Locale) {
    await runSafely(
        () => EncryptedStorage.setItem(APP_LOCALE, locale.valueOf()),
        'Failed to save the App Locale'
    );
}

export async function getAppLocale(): Promise<Locale> {
    const locale = await runSafely(
        () => EncryptedStorage.getItem(APP_LOCALE),
        'Failed to retrieve the App Locale',
        Locale.SYSTEM
    );

    return locale && Object.values(Locale).includes(locale as Locale) ? locale as Locale : Locale.SYSTEM;
}

export async function clearStorage() {
    await runSafely(
        () => EncryptedStorage.clear(),
        'Failed to clear the storage'
    );
}
