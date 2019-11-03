import React from 'react';
import Link from 'next/link';
import content from '../content/home.md';

const Home = () => {
    const { attributes, html } = content;
    return (
        <>
            <h1>{attributes.title}</h1>
            <div>
                <li>
                    <Link href={'/'}>
                        <a>home</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/projects'}>
                        <a>projects</a>
                    </Link>
                </li>
                <li>
                    <Link href={'/about'}>
                        <a>about</a>
                    </Link>
                </li>
            </div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </>
    );
}

export default Home;
