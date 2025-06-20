import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dimens from '@dimens';

export const Spacer = () => <View style={styles.spacer} />;

const styles = StyleSheet.create({
    spacer: {
        flex: Dimens.fullFlex,
    },
});
