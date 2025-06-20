import Config from 'react-native-config';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

export const flavor = Config.FLAVOR;

export const isTestEnv = flavor === 'qa';

export const appVersion = `${DeviceInfo.getVersion()} (${DeviceInfo.getBuildNumber()})`;

export const isIOS = Platform.OS === 'ios';
