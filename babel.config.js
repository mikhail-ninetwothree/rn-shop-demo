module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'src': './src',
          '@data': './src/data',
          '@presentation': './src/presentation',
          '@components': './src/presentation/components',
          '@context': './src/presentation/context',
          '@domain': './src/domain',
          '@util': './src/util',
          '@theme': './src/presentation/theme',
          '@screens': './src/presentation/screens',
          '@navigation': './src/navigation',
          '@appInfo': './src/util/appInfo.ts',
          '@fonts': './src/util/resources/Fonts.ts',
          '@strings': './src/util/resources/Strings.ts',
          '@images': './src/util/resources/Images.ts',
          '@dimens': './src/util/resources/Dimens.ts',
          '@icons': './src/util/resources/Icons.ts',
          '@localization': './src/i18n/localization.ts',
          '@consts': './src/util/Constants.ts',
          '@alert': './src/presentation/hooks/useAlert.ts',
          '@provider': './src/provider',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
