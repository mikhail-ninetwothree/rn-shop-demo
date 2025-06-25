export enum Strings {
    // Common
    ok = 'ok',
    cancel = 'cancel',
    back = 'back',
    done = 'done',
    continue = 'continue',
    yes = 'yes',
    no = 'no',
    tryAgain = 'tryAgain',

    // Environment
    envSplashTTitle = 'envSplashTTitle',
    envSplashTVersion = 'envSplashTVersion',

    // Welcome
    welcomeTitle = 'welcomeTitle',
    welcomeSubtitle = 'welcomeSubtitle',
    welcomeBtn = 'welcomeBtn',

    // Login
    loginTitle = 'loginTitle',
    loginSubtitle = 'loginSubtitle',
    loginIUsername = 'loginIUsername',
    loginIPassword = 'loginIPassword',
    loginBtn = 'loginBtn',

    // Home
    homeTitle = 'homeTitle',

    // Product Details
    availability = 'availability',
    ratingsAndReviews = 'ratingsAndReviews',
    shipping = 'shipping',

    // Settings
    settingsTitle = 'settingsTitle',
    settingsPersonal = 'settingsPersonal',
    settingsProfile = 'settingsProfile',
    settingsAccount = 'settingsAccount',
    settingsLanguage = 'settingsLanguage',
    settingsLanguageSystem = 'settingsLanguageSystem',
    settingsLanguageEnglish = 'settingsLanguageEnglish',
    settingsLanguageSpanish = 'settingsLanguageSpanish',
    settingsTheme = 'settingsTheme',
    settingsLogoutTitle = 'settingsLogoutTitle',
    settingsLogout = 'settingsLogout',

    // Profile
    profileTitle = 'profileTitle',

    // Errors
    errorInvalidEmailFormat = 'errorInvalidEmailFormat',
    errorRequiredField = 'errorRequiredField',
    errorInvalidPassword = 'errorInvalidPassword',
    errorUnexpected = 'errorUnexpected',
    errorGeneric = 'errorGeneric',
    errorWhoops = 'errorWhoops',

    // Network Errors
    errorUnauthorized = 'errorUnauthorized',
    errorServerError = 'errorServerError',
    errorNoInternetTTitle = 'errorStateNoInternetTTitle',
    errorNoInternetTDesc = 'errorStateNoInternetTDesc',
}

export function capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}