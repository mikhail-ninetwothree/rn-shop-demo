import React, { ReactElement } from 'react';
import { useAppContext } from '@presentation/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RootStackParamList } from '@navigation/routes';
import WelcomeScreen from 'src/presentation/screens/auth/welcome/WelcomeScreen';
import LoginScreen from 'src/presentation/screens/auth/login/LoginScreen';
import TabsScreen from '@screens/tabs/TabsScreen';
import ProductDetailsScreen from 'src/presentation/screens/product_details/ProductDetailsScreen';
import LanguageSettingsScreen from 'src/presentation/screens/language_settings/LanguageSettingsScreen';
import ProfileScreen from 'src/presentation/screens/profile/ProfileScreen';

const AuthStack = createStackNavigator<RootStackParamList>();
const MainStack = createStackNavigator<RootStackParamList>();

export default () => {
    const { appState } = useAppContext();

    return (
        <NavigationContainer>
            {
                appState.isUserLoggedIn ?
                    (<MainNavigator />) :
                    (<AuthNavigator />)
            }
        </NavigationContainer>
    );
};

function AuthNavigator(): ReactElement {
    const { appState } = useAppContext();
    
    return (
        <AuthStack.Navigator 
            screenOptions={{ headerShown: false, gestureEnabled: false }}
            initialRouteName={appState.hasSeenWelcome ? Routes.Login : Routes.Welcome}>
            <AuthStack.Screen name={Routes.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={Routes.Login} component={LoginScreen} />
        </AuthStack.Navigator>
    );
}

// TODO: if the gestures should be used for the back navigation remove the gestureEnabled: false in both navigators
function MainNavigator(): ReactElement {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MainStack.Screen name={Routes.Tabs} component={TabsScreen} />
            <MainStack.Screen name={Routes.ProductDetails} component={ProductDetailsScreen} />
            <MainStack.Screen name={Routes.Profile} component={ProfileScreen} />
            <MainStack.Screen name={Routes.LanguageSettings} component={LanguageSettingsScreen} />
        </MainStack.Navigator>
    );
}
