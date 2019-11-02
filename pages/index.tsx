import React, { Component } from 'react';
import Link from 'next/link';

import content from '../content/home.md';

export default class Home extends Component {
    render() {
        const { attributes, html } = content;
        return (
            <React.Fragment>
                <h1>{attributes.title}</h1>
                <React.Fragment>
                    <nav>
                        <Link href={'/'}>
                            <a>home</a>
                        </Link>
                        <Link href={'/blog'}>
                            <a>blog</a>
                        </Link>
                        <Link href={'/about'}>
                            <a>about</a>
                        </Link>
                    </nav>
                </React.Fragment>
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </React.Fragment>
        );
    }
}
