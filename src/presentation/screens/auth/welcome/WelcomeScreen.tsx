import { Text, useTheme } from '@rneui/themed';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { themedStyles } from './styles';
import { View } from 'react-native';
import { getString } from '@localization';
import { Strings } from '@strings';
import Icons from '@icons';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from 'src/navigation/routes';
import Routes from '@navigation/routes';

export default () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const handleStart = () => {
        navigation.navigate(Routes.Login);
    };
    return (
        <View style={styles.container}>
            <View style={styles.centerContent}>
                <View style={styles.circle}>
                    <Icons.WelcomeLogo/>
                </View>
                <Text style={styles.welcomeTitle}>{getString(Strings.welcomeTitle)}</Text>
                <Text style={styles.welcomeSubtitle}>{getString(Strings.welcomeSubtitle)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonPrimary
                    title={getString(Strings.welcomeBtn)}
                    onClick={handleStart}
                />
            </View>
        </View>
    );
};