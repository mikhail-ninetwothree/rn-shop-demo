import { useCallback } from 'react';
import { Easing, Notifier } from 'react-native-notifier';
import AlertMessage from '@components/AlertMessage';
import { getString } from '@localization';
import { Strings } from '@strings';
import Constants from '@consts';

export enum AlertType {
    SUCCESS,
    ERROR,
}

export default () => {
    const showAlert = useCallback((
        description: string,
        title: string = getString(Strings.errorWhoops),
        type: AlertType = AlertType.ERROR,
        actionText: string = '',
        onPress?: () => void,
    ) => {
        Notifier.showNotification({
            title: title,
            description: description,
            duration: Constants.alertDuration,
            showAnimationDuration: Constants.alertAnimationDuration,
            showEasing: Easing.bezier(0.465, 0.183, 0.153, 0.946),
            hideOnPress: false,
            componentProps: {
                type: type,
            },
            Component: AlertMessage,
        });
    }, []);

    return { showAlert };
};
