import bugsnag from './bugsnag';

export function reportError(err, options = {}) {
    bugsnag.notify(err, options);
    console.error(err);
}
