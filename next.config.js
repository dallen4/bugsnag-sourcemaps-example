// require('dotenv').config();
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')();
const { BugsnagSourceMapUploaderPlugin } = require('webpack-bugsnag-plugins');

const env = {
    apiUri: process.env.API_URI,
    bugsnagApiKey: process.env.BUGSNAG_API_KEY,
};

module.exports = withSourceMaps(
    withCSS({
        target: 'serverless',
        env,
        webpack(config, options) {
            const { dev, isServer } = options;
            if (isServer) {
                config.devtool = 'source-map';
            }

            if (!dev) {
                config.plugins.push(
                    new BugsnagSourceMapUploaderPlugin({
                        apiKey: process.env.BUGSNAG_API_KEY,
                        appVersion: require('./package.json').version,
                        publicPath: 'https://bugsnag-sourcemaps-example.now.sh/_next/',
                        releaseStage:
                            process.env.COOKIE_DOMAIN !== 'localhost'
                                ? 'production'
                                : 'testing',
                        overwrite: true,
                        uploadSource: true,
                    }),
                );
            }

            return config;
        },
    }),
);
