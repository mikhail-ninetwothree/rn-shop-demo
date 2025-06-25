import { Text, useTheme } from '@rneui/themed';
import { TouchableOpacity, View } from 'react-native';
import { themedStyles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getString } from 'src/i18n/localization';
import { capitalize, Strings } from 'src/util/resources/Strings';
import IcBack from 'src/presentation/components/IcBack';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from 'src/presentation/context/AppContext';
import CacheImageView from 'src/presentation/components/CacheImageView';
import Dimens from 'src/util/resources/Dimens';

export default () => {
    const navigation = useNavigation();
    const { appState } = useAppContext();
    const user = appState.user; 

    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets);
    
    const goBack = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <View style={styles.navigationBar}>
                <TouchableOpacity onPress={goBack}>
                    <IcBack/>
                </TouchableOpacity>
                <Text style={styles.title}>{getString(Strings.settingsTitle)}</Text>    
            </View>
            {user && (
                <View style={styles.content}>
                    <Text style={styles.subtitle}>{getString(Strings.profileTitle)}</Text>
                    <View style={styles.avatarShadowContainer}>
                        <View style={styles.avatarClipContainer}>
                            <CacheImageView uri={user.image} style={[{flex: Dimens.fullFlex}]}/>
                        </View>
                    </View>
                    <View style={styles.nameAndGender}>
                        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
                        <Text style={styles.gender}>{`(${capitalize(user.gender)})`}</Text>
                    </View>
                    <Text style={styles.details}>{`Username: ${user.username}`}</Text>
                    <Text style={styles.details}>{`Email: ${user.email}`}</Text>
                </View>
            )}
        </View>
    );
};
