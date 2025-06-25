import React, { useEffect, useState } from 'react';
import { AppContextProvider, useAppContext } from '@context/AppContext';
import { ThemeProvider, useTheme } from '@rneui/themed';
import appTheme, { AppTheme } from '@theme/appTheme';
import RootNavigation from '@navigation/RootNavigation';
import BootSplash from 'react-native-bootsplash';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@data/remote/networkModule';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EnvironmentScreen from '@screens/env_splash/EnvironmentScreen';
import { isIOS, isTestEnv } from '@appInfo';
import Constants from '@consts';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FullscreenProgress from '@components/FullscreenProgress';
import { NotifierWrapper } from 'react-native-notifier';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import AppBottomSheetModalProvider from 'src/provider/AppBottomSheetModalProvider';
import KeyboardManager from 'react-native-keyboard-manager';

if (isIOS) {
    KeyboardManager.setEnable(true);
    KeyboardManager.setEnableAutoToolbar(false);
    KeyboardManager.setShouldResignOnTouchOutside(true);
}

const App = () => {
    return (
        <AppContextProvider>
            <MainApp/>
        </AppContextProvider>
    );
};

const MainApp = () => {
    const { appState } = useAppContext();
    const [shouldShowEnvironmentScreen, setShouldShowEnvironmentScreen] = useState(isTestEnv);

    useEffect(() => {
        if (appState.isInitialized) {
            BootSplash.hide();

            setTimeout(() => {
                setShouldShowEnvironmentScreen(false);
            }, Constants.envSlashDuration);
        }
    }, [appState.isInitialized]);

    if (!appState.isInitialized) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={appTheme(appState.theme)}>
            <SafeAreaProvider>
                <GestureHandlerRootView>
                    <NotifierWrapper>
                        <BottomSheetModalProvider>
                            <AppBottomSheetModalProvider>
                                <AppContent shouldShowEnvironmentScreen={shouldShowEnvironmentScreen}/>
                            </AppBottomSheetModalProvider>
                        </BottomSheetModalProvider>
                        {appState.showGlobalProgress && <FullscreenProgress/>}
                    </NotifierWrapper>
                </GestureHandlerRootView>
            </SafeAreaProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

const AppContent = ({ shouldShowEnvironmentScreen }: { shouldShowEnvironmentScreen: boolean }) => {
    const { appState } = useAppContext();
    const { theme } = useTheme();
    const isDarkModeEnabled = appState.theme === AppTheme.DARK

    return (
        <>
            <StatusBar translucent backgroundColor={theme.colors.clear} barStyle={isDarkModeEnabled ? 'light-content' : 'dark-content'}/>
            {shouldShowEnvironmentScreen ? <EnvironmentScreen/> : <RootNavigation/>}
        </>
    );
};

export default App;
