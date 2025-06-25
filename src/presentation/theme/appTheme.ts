import { ThemeMode, createTheme } from '@rneui/themed';
import '@rneui/themed';
import { buttonStyle, textStyle } from './styles';
import { Appearance } from 'react-native';
import { getAppTheme } from '@data/local/appStorage';

declare module '@rneui/themed' {
    export interface Colors {
        primaryDark: string;
        textPrimary: string;
        textTetriary: string;
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
        shadowPrimary: string;
        tabActive: string;
        tabInactive: string;
        productBackgrounds: string[];
        discountGradient: string[];
        originalPrice: string;
        rating: string;
        ratingBackground: string;
        languageBackground: string;
        languageBackgroundSelected: string;
        switchOn: string;
        switchOff: string;
        dividerOpacity: number;
        rightArrow: string;
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
        // shadow colors
        shadowPrimary: '#000000',

        // main colors
        primary: '#004CFF',
        primaryDark: '#004CFF80',
        secondary: '#B2E1E1',
        secondaryDark: '#86D1D1',
        danger: '#D75D45',
        dangerDark: '#D24A30',
        dangerLight: '#E28270',

        // text colors
        textPrimary: '#202020',
        textTetriary: '#000000',
        textPrimaryLight: '#D2D2D2',
        textSecondary: '#303336',
        textSecondaryLight: '#828488',
        textAppPrimary: '#C67C4E',
        textAppPrimaryDark: '#B27046',
        textAppPrimaryLight: '#ffa16d',
        textWhite: '#FFFFFF',
        textPrimaryStrict: '#050505',

        // components colors
        divider: '#000000',
        inputBackground: '#F2F2F2',
        progressBackground: '#00000026',
        disabled: '#B9BBBE',
        disabledLight: '#F0F1F5',
        bsBackdrop: '#14181BB2',
        bsHandleIndicator: '#3C3C434D',

        // misc colors
        white: '#FFFFFF',
        black: '#000000',

        background: '#FFFFFF',
        surface: '#FFFFFF',
        error: '#ED5151',
        clear: '#FFFFFF00',
        errorLightest: '#FDDFD9',

        // tabs
        tabActive: '#004CFF',
        tabInactive: '#000000',

        // products
        productBackgrounds: ['#dddedf', '#b02a43', '#a649ae', '#d9ac18', '#ffc8cd'],
        discountGradient: ['#F81140', '#FF5790'],
        originalPrice: '#F1AEAE',
        rating: '#ECA61B',
        ratingBackground: '#DFE9FF',

        // settings
        languageBackground: '#F9F9F9',
        languageBackgroundSelected: '#E5EBFC',
        switchOn: '#34C759',
        switchOff: '#E5E5EA',
        
        dividerOpacity: 0.1,
        rightArrow: '#000000'
    },
    darkColors: {
        // shadow colors
        shadowPrimary: '#ffffff',

        // main colors
        primary: '#004CFF',
        primaryDark: '#004CFF80',
        secondary: '#B2E1E1',
        secondaryDark: '#86D1D1',
        danger: '#D75D45',
        dangerDark: '#D24A30',
        dangerLight: '#E28270',

        // text colors
        textPrimary: '#ffffff',
        textTetriary: '#ffffff',
        textPrimaryLight: '#D2D2D2',
        textSecondary: '#303336',
        textSecondaryLight: '#828488',
        textAppPrimary: '#C67C4E',
        textAppPrimaryDark: '#B27046',
        textAppPrimaryLight: '#ffa16d',
        textWhite: '#FFFFFF',
        textPrimaryStrict: '#050505',

        // components colors
        divider: '#ffffff',
        inputBackground: '#2C2C2E',
        progressBackground: '#00000026',
        disabled: '#3A3A3C',
        disabledLight: '#F0F1F5',
        bsBackdrop: '#14181BB2',
        bsHandleIndicator: '#3C3C434D',

        // misc colors
        white: '#FFFFFF',
        black: '#000000',
        background: '#242424',
        surface: '#202020',
        error: '#bd4040',
        clear: '#FFFFFF00',
        errorLightest: '#FDDFD9',

        // tabs
        tabActive: '#004CFF',
        tabInactive: '#ffffff',
        
        // products
        productBackgrounds: ['#dddedf', '#b02a43', '#a649ae', '#d9ac18', '#ffc8cd'],
        discountGradient: ['#F81140', '#FF5790'],
        originalPrice: '#F1AEAE',
        rating: '#ECA61B',
        ratingBackground: '#DFE9FF',

        // settings
        languageBackground: '#1C1C1E',
        languageBackgroundSelected: '#2C3E70',
        switchOn: '#34C759',
        switchOff: '#E5E5EA',

        dividerOpacity: 0.2,
        rightArrow: '#ffffff',
    },
    mode: getThemeMode(selectedTheme),
    components: {
        // TODO: add/remove styles as needed
        Button: (props, theme) => buttonStyle(props, theme),
        Text: (props, theme) => textStyle(props, theme),
    },
});

export default appTheme;
