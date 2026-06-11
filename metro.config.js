const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (platform === 'web' && moduleName === 'react-native-vision-camera') {
    return {
      type: 'sourceFile',
      filePath: require.resolve('./src/mocks/react-native-vision-camera.js'),
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config;
