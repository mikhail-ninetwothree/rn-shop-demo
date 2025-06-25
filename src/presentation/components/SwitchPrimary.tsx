import { useTheme } from '@rneui/themed';
import { Switch } from 'react-native-gesture-handler';

interface SwitchPrimaryProps {
    value: boolean;
    onToggle: () => void;
}

export default ({ ...props }: SwitchPrimaryProps) => {
    const { theme } = useTheme();
    return (
        <Switch
            value={props.value}
            onValueChange={props.onToggle}
            trackColor={{ false: theme.colors.switchOff, true: theme.colors.switchOn }}
            thumbColor={theme.colors.white}
            ios_backgroundColor={theme.colors.white}
        />
    );
};