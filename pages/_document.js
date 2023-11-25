/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import * as React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel='shortcut icon' href='/static/favicon.ico' />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link
                        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
                        rel='stylesheet'
                    />
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
                        rel='stylesheet'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) =>
                function EnhanceApp(props) {
                    return <App {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
    };
};
