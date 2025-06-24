import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Product } from 'src/data/home/models/Product';

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
    ProductDetails: 'ProductDetails',
    Settings: 'Settings'
} as const;

// Define parameters for each screen (undefined means no params)
export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    Tabs: undefined;
    Home: undefined;
    ProductDetails: { product: Product, bgColor: string };
    Settings: undefined;
};

// Navigation Props
export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type TabsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Tabs'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;
export type SettingsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

// Route Props
export type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
