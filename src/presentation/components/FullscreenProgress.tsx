import { Colors, useTheme } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Circle } from 'react-native-progress';
import Dimens from '@dimens';

export default () => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);

    return (
        <View style={styles.container}>
            <Circle size={Dimens.progressSize} indeterminate={true} color={theme.colors.primary} />
        </View>
    );
};

const themedStyles = (colors: Colors) => StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.progressBackground,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
