declare module 'react-native-config' {
    export interface NativeConfig {
        FLAVOR?: string;
        BASE_URL?: string;
    }

    export const Config: NativeConfig;
    export default Config;
}
