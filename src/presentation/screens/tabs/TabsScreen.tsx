import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import { themedStyles } from './styles';
import Icons from 'src/util/resources/Icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Routes from '@navigation/routes';
import HomeScreen from '../home/HomeScreen';
import SettingsScreen from '../settings/SettingsScreen.tsx';

const Tab = createBottomTabNavigator();

export default () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
            
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: styles.tabBar,
            tabBarIconStyle: styles.tabBarIconStyle,
            tabBarShowLabel: false,
            tabBarActiveTintColor: theme.colors.tabActive,
            tabBarInactiveTintColor: theme.colors.tabInactive,
            headerShown: false,
            animation: 'fade'}}>
            <Tab.Screen
                name={Routes.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons.Home width={size} height={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name={Routes.Settings}
                component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons.Settings width={size} height={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};