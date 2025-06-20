import React, { createContext, useState, useContext, useEffect, FC, ReactNode } from 'react';
import { AppTheme, getCurrentTheme } from '@theme/appTheme';
import { Locale, preferredLocale } from '@localization';
import I18n from 'i18n-js';
import { Appearance } from 'react-native';
import { clearStorage, getAppLocale, isLoggedIn, setAppLocale, setAppTheme, setIsUserLoggedIn } from '@data/local/appStorage';
import { queryClient } from 'src/data/remote/networkModule';

interface IAppState {
    isInitialized: boolean;
    isUserLoggedIn: boolean;
    theme: AppTheme;
    locale: Locale;
    showGlobalProgress: boolean;
}

interface IAppContext {
    appState: IAppState;
    logIn: () => void;
    logOut: () => void;
    changeAppTheme: (theme: AppTheme) => void;
    updateThemeBySystem: (theme: AppTheme) => void;
    changeAppLocale: (locale: Locale) => void;
    changeGlobalProgressState: (showProgress: boolean) => void;
}

const defaultAppState: IAppState = {
    isInitialized: false,
    isUserLoggedIn: false,
    theme: AppTheme.LIGHT,
    locale: Locale.SYSTEM,
    showGlobalProgress: false,
};

const defaultContextValue: IAppContext = {
    appState: defaultAppState,
    logIn: () => { },
    logOut: () => { },
    changeAppTheme: () => { },
    updateThemeBySystem: () => { },
    changeAppLocale: () => { },
    changeGlobalProgressState: () => { },
};

const AppContext = createContext<IAppContext>(defaultContextValue);

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [appState, setAppState] = useState<IAppState>(defaultAppState);

    useEffect(() => {
        Appearance.addChangeListener(
            async () => {
                const theme = await getCurrentTheme();
                setAppState((prevState) => ({ ...prevState, theme: theme }));
            });

        const initState = async () => {
            const isUserLoggedIn = await isLoggedIn();
            const theme = await getCurrentTheme();
            let locale = await getAppLocale();
            if (locale === Locale.SYSTEM) {
                locale = await preferredLocale();
            }
            I18n.locale = locale.valueOf();
            setAppState((prevState) => ({ ...prevState, isUserLoggedIn: isUserLoggedIn, theme: theme, locale: locale, isInitialized: true }));
        };

        initState();
    }, []);

    function logIn() {
        setIsUserLoggedIn(true);
        setAppState({ ...appState, isUserLoggedIn: true });
    }

    async function logOut() {
        clearStorage();
        queryClient.clear();
        setAppState({ ...appState, isUserLoggedIn: false });
    }

    function changeAppTheme(theme: AppTheme) {
        setAppTheme(theme);
        setAppState({ ...appState, theme: theme });
    }

    function updateThemeBySystem(theme: AppTheme) {
        setAppState({ ...appState, theme: theme });
    }

    function changeAppLocale(locale: Locale) {
        I18n.locale = locale.valueOf();
        setAppLocale(locale);
        setAppState({ ...appState, locale: locale });
    }

    function changeGlobalProgressState(showProgress: boolean) {
        setAppState({ ...appState, showGlobalProgress: showProgress });
    }

    return (
        <AppContext.Provider value={{ appState, logIn, logOut, changeAppTheme, updateThemeBySystem, changeAppLocale, changeGlobalProgressState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
