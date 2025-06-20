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
    Login: 'Login',
    Home: 'Home',
    Details: 'Details',
} as const;

// Define parameters for each screen (undefined means no params)
export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Details: { data: string[] },
};

// Navigation Props
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

// Route Props
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
