import React, { ReactElement } from 'react';
import { useAppContext } from '@presentation/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RootStackParamList } from '@navigation/routes';
import WelcomeScreen from 'src/presentation/screens/auth/welcome/WelcomeScreen';
import LoginScreen from 'src/presentation/screens/auth/login/LoginScreen';
import TabsScreen from '@screens/tabs/TabsScreen';

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
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
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
        </MainStack.Navigator>
    );
}
