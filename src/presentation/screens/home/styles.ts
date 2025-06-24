import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    container: {
        flex: Dimens.fullFlex,
        backgroundColor: colors.surface,
        paddingTop: insets.top,
    }
});
