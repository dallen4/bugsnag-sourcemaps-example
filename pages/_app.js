import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import bugsnagClient from '../src/lib/errors/bugsnag';
import Error from './_error';

const ErrorBoundary = bugsnagClient.getPlugin('react');

class NextApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ErrorBoundary FallbackComponent={Error}>
                <React.Fragment>
                    <Head>
                        <title>Elevator Admin</title>
                    </Head>
                    <Component {...pageProps} />
                </React.Fragment>
            </ErrorBoundary>
        );
    }
}

export default NextApp;
