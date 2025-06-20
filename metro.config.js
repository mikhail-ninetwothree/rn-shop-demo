const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    transformer: {
        babelTransformerPath: require.resolve(
            'react-native-svg-transformer/react-native'
        ),
    },
    resolver: {
        alias: {
            'src': path.resolve(__dirname, 'src'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@presentation': path.resolve(__dirname, 'src/presentation'),
            '@components': path.resolve(__dirname, 'src/presentation/components'),
            '@context': path.resolve(__dirname, 'src/presentation/context'),
            '@domain': path.resolve(__dirname, 'src/domain'),
            '@util': path.resolve(__dirname, 'src/util'),
            '@theme': path.resolve(__dirname, 'src/presentation/theme'),
            '@screens': path.resolve(__dirname, 'src/presentation/screens'),
            '@navigation': path.resolve(__dirname, 'src/navigation'),
            '@appInfo': path.resolve(__dirname, 'src/util/appInfo'),
            '@fonts': path.resolve(__dirname, 'src/util/resources/Fonts'),
            '@strings': path.resolve(__dirname, 'src/util/resources/Strings'),
            '@dimens': path.resolve(__dirname, 'src/util/resources/Dimens'),
            '@icons': path.resolve(__dirname, 'src/util/resources/Icons'),
            '@images': path.resolve(__dirname, 'src/util/resources/Images'),
            '@localization': path.resolve(__dirname, 'src/i18n/localization'),
            '@consts': path.resolve(__dirname, 'src/util/Constants'),
            '@alert': path.resolve(__dirname, 'src/presentation/hooks/useAlert'),
            '@provider': path.resolve(__dirname, 'src/provider'),
        },
        assetExts: defaultConfig.resolver.assetExts
            .filter((ext) => ext !== 'svg')
            .concat(['ttf', 'otf', 'gif']),
        sourceExts: [...defaultConfig.resolver.sourceExts, 'env', 'svg', 'gif'],
        resetCache: true,
    },
};

module.exports = wrapWithReanimatedMetroConfig(mergeConfig(defaultConfig, config));
