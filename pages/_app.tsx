import React from 'react';
import App from 'next/app';
import Link from 'next/link';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <header>
                    <nav>
                        <Link href={'/'}>
                            <a>home </a>
                        </Link>
                        <Link href={'/projects'}>
                            <a>projects </a>
                        </Link>
                        <Link href={'/about'}>
                            <a>about </a>
                        </Link>
                    </nav>
                </header>
                <Component {...pageProps} />
            </>
        );
    }
}
