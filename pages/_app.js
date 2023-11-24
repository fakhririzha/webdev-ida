import '@css/globals.css';
import Head from 'next/head';
import * as React from 'react';

const MyApp = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <meta name='viewport' content='initial-scale=1, width=device-width' />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
