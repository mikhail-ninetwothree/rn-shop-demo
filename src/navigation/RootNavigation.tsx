import React, { ReactElement } from 'react';
import { useAppContext } from '@presentation/context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Routes, { RootStackParamList } from '@navigation/routes';
import WelcomeScreen from 'src/presentation/screens/auth/welcome/WelcomeScreen';
import HomeScreen from '@screens/home/HomeScreen';
import LoginScreen from 'src/presentation/screens/auth/login/LoginScreen';

const MainStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<RootStackParamList>();

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

// TODO: if the gestures should be used for the back navigation remove the gestureEnabled: false in both navigators
function MainNavigator(): ReactElement {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <MainStack.Screen name={Routes.Home} component={HomeScreen} />
        </MainStack.Navigator>
    );
}

function AuthNavigator(): ReactElement {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <AuthStack.Screen name={Routes.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={Routes.Login} component={LoginScreen} />
        </AuthStack.Navigator>
    );
}
