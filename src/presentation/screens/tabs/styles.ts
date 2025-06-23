import { Colors } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Dimens from '@dimens';
import { EdgeInsets } from 'react-native-safe-area-context';

export const themedStyles = (colors: Colors, insets: EdgeInsets) => StyleSheet.create({
    tabBar: {
        height: insets.bottom + Dimens.tabBarHeight,
        backgroundColor: colors.surface,
        borderTopWidth: Dimens.zero,
        paddingTop: Dimens.marginPrimary1_75X,
        shadowColor: colors.shadowPrimary,
        shadowOffset: { width: Dimens.zero, height: -Dimens.offsetSmallest }, 
        shadowOpacity: 0.1,
        shadowRadius: 1
    },
    tabBarIconStyle: {
        position: Dimens.positionAbsolute
    }
});
