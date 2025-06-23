import React from 'react';
import { Text, useTheme } from '@rneui/themed';
import { View } from 'react-native';
import { themedStyles } from './styles';
import { Spacer } from '@components/Spacer';

export default () => {
    const { theme } = useTheme();
    const styles = themedStyles(theme.colors);
    
    return (
        <View style={styles.container}>
            <Spacer />
            <Text>Settings</Text>
            <Spacer />
        </View>
    );
};
