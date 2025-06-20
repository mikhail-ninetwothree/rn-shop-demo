import { ThemeMode, createTheme } from '@rneui/themed';
import '@rneui/themed';
import { buttonStyle, textStyle } from './styles';
import { Appearance } from 'react-native';
import { getAppTheme } from '@data/local/appStorage';

declare module '@rneui/themed' {
    export interface Colors {
        // TODO: add/remove the colors that needed
        primaryDark: string;
        textPrimary: string;
        textPrimaryLight: string;
        surface: string;
        tabBackground: string;
        inputBackground: string;
        progressBackground: string;
        clear: string;
        errorLightest: string;
        textSecondary: string;
        textSecondaryLight: string;
        textAppPrimary: string;
        textAppPrimaryDark: string;
        textAppPrimaryLight: string;
        textWhite: string;
        disabledLight: string;
        danger: string;
        dangerDark: string;
        dangerLight: string;
        secondaryDark: string;
        bsBackdrop: string;
        bsHandleIndicator: string;
        textPrimaryStrict: string;
    }
}

export enum AppTheme {
    SYSTEM = 'system',
    LIGHT = 'light',
    DARK = 'dark'
}

const defaultTheme = AppTheme.LIGHT;

const getThemeMode = (appTheme: AppTheme): ThemeMode => {
    let theme: ThemeMode;

    if (appTheme === AppTheme.SYSTEM) {
        theme = preferredTheme() as ThemeMode;
    } else {
        theme = appTheme as ThemeMode;
    }

    return theme;
};

export const getCurrentTheme = async (): Promise<AppTheme> => {
    let theme = await getAppTheme();
    if (theme === AppTheme.SYSTEM) {
        theme = preferredTheme();
    }
    return theme;
};

export const preferredTheme = (): AppTheme => {
    const colorScheme = Appearance.getColorScheme();

    switch (colorScheme) {
        case 'light':
            return AppTheme.LIGHT;
        case 'dark':
            return AppTheme.DARK;
        default:
            return defaultTheme;
    }
};

const appTheme = (selectedTheme: AppTheme) => createTheme({
    // TODO: add/remove the colors that needed
    lightColors: {
        // main colors
        primary: '#C67C4E',
        primaryDark: '#B27046',
        secondary: '#B2E1E1',
        secondaryDark: '#86D1D1',
        danger: '#D75D45',
        dangerDark: '#D24A30',
        dangerLight: '#E28270',

        // text colors
        textPrimary: '#050505',
        textPrimaryLight: '#242424',
        textSecondary: '#303336',
        textSecondaryLight: '#828488',
        textAppPrimary: '#C67C4E',
        textAppPrimaryDark: '#B27046',
        textAppPrimaryLight: '#ffa16d',
        textWhite: '#FFFFFF',
        textPrimaryStrict: '#050505',

        // components colors
        greyOutline: '#A2A2A2',
        inputBackground: '#FFFFFF',
        progressBackground: '#00000026',
        disabled: '#B9BBBE',
        disabledLight: '#F0F1F5',
        bsBackdrop: '#14181BB2',
        bsHandleIndicator: '#3C3C434D',

        // misc colors
        white: '#FFFFFF',
        background: '#FFFFFF',
        surface: '#F9F9F9',
        error: '#ED5151',
        clear: '#FFFFFF00',
        errorLightest: '#FDDFD9',
    },
    darkColors: {
        // main colors
        primary: '#9E633E',
        primaryDark: '#6A432A',
        secondary: '#B2E1E1',
        secondaryDark: '#86D1D1',
        danger: '#D75D45',
        dangerDark: '#D24A30',
        dangerLight: '#E28270',

        // text colors
        textPrimary: '#F9F9F9',
        textPrimaryLight: '#D8D8D8',
        textSecondary: '#303336',
        textSecondaryLight: '#828488',
        textAppPrimary: '#C67C4E',
        textAppPrimaryDark: '#B27046',
        textAppPrimaryLight: '#ffa16d',
        textWhite: '#FFFFFF',
        textPrimaryStrict: '#050505',

        // components colors
        greyOutline: '#A2A2A2',
        inputBackground: '#787878',
        progressBackground: '#00000026',
        disabled: '#B9BBBE',
        disabledLight: '#F0F1F5',
        bsBackdrop: '#14181BB2',
        bsHandleIndicator: '#3C3C434D',

        // misc colors
        white: '#FFFFFF',
        background: '#242424',
        surface: '#3F3F3F',
        error: '#bd4040',
        clear: '#FFFFFF00',
        errorLightest: '#FDDFD9',
    },
    mode: getThemeMode(selectedTheme),
    components: {
        // TODO: add/remove styles as needed
        Button: (props, theme) => buttonStyle(props, theme),
        Text: (props, theme) => textStyle(props, theme),
    },
});

export default appTheme;
