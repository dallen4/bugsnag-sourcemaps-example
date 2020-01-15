import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import React from 'react';

const bugsnagClient = bugsnag({
    apiKey: process.env.bugsnagApiKey,
    appVersion: require('../../../package.json').version,
    notifyReleaseStages: ['testing', 'production'],
    releaseStage: 'testing',
});

bugsnagClient.use(bugsnagReact, React);

export default bugsnagClient;
