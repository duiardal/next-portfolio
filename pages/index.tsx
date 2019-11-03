import React from 'react';
import Link from 'next/link';
import content from '../content/home.md';

const Home = () => {
    const { attributes, html } = content;
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

export default Home;
