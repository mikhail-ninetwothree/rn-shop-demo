import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// TODO: Details screen and props are there just for the example to show what is expected for the navigation usage.
/**
* Usage example:
 *  const navigation = useNavigation<DetailsScreenNavigationProp>();
 *  const route = useRoute<DetailsScreenRouteProp>();
 *
 *  navigation - for navigation actions (navigate, push, pop, popTo, goBack, etc.)
 *  route.params - for params getting that are passed to that screen
* */
export default {
    Welcome: 'Welcome',
    Login: 'Login',
    Tabs: 'Tabs',
    Home: 'Home',
    Settings: 'Settings'
    // Details: 'Details',
} as const;

// Define parameters for each screen (undefined means no params)
export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Tabs: undefined;
    Home: undefined;
    Settings: undefined;
    // Details: { data: string[] },
};

// Navigation Props
export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type TabsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;
// export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

// // Route Props
// export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
