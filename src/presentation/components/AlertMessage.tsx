import React from 'react';
import { Colors, Text, useTheme } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import Dimens from '@dimens';
import Fonts from '@fonts';
import Icons from '@icons';
import { AlertType } from '@alert';

// TODO: customize the alert as needed. Also, change the icons and it's colors if needed (don't forget to remove `fill` in the icons as needed as well.
export default ({ title, description, type }: { title: string, description: string, type: AlertType }) => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    const styles = themedStyles(theme.colors, insets, type);

    const AlertTypeIcon = type === AlertType.SUCCESS
        ? Icons.AlertSuccess
        : Icons.AlertError;

    return (
        <View style={styles.container}>
            <AlertTypeIcon
                width={Dimens.textBtnIconSize}
                height={Dimens.textBtnIconSize}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};

const themedStyles = (colors: Colors, insets: EdgeInsets, type: AlertType) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: type === AlertType.ERROR ? colors.errorLightest : colors.background,
        borderColor: type === AlertType.ERROR ? colors.error : colors.greyOutline,
        borderWidth: Dimens.borderWidth,
        borderRadius: Dimens.radiusMedium,
        marginTop: insets.top,
        marginHorizontal: Dimens.marginPrimary1_5X,
        padding: Dimens.marginPrimary2X,
        elevation: Dimens.marginPrimaryQuarter,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: Dimens.marginPrimaryQuarter },
        shadowOpacity: 0.1,
        shadowRadius: Dimens.marginPrimaryQuarter,
    },
    textContainer: {
        flex: Dimens.fullFlex,
        marginStart: Dimens.marginPrimaryHalf1_5X,
    },
    title: {
        ...Fonts.Subtitle,
        color: colors.textPrimary,
    },
    description: {
        ...Fonts.Body,
        color: colors.textPrimary,
    },
});
