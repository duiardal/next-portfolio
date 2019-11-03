import React from 'react';
import App from 'next/app';
import Header from '../components/header';
import Footer from '../components/footer';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </>
        );
    }
}
