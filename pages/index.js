import Content from '@frontendComponents/homepage';
import Footer from '@frontendComponents/theme/layout/footer';
import Navbar from '@frontendComponents/theme/layout/navbar';
import Layout from '@modules/theme/layout';
import React from 'react';

const Index = () => {
    return (
        <Layout
            pageProps={{
                title: 'Homepage',
                description: 'Homepage',
            }}
        >
            <Navbar />
            <Content />
            <Footer />
        </Layout>
    );
};

export default Index;
