import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
    grid-column: span 2;
`

const Sidebar = () => (
    <nav>
        <Link href="/">
            <a href="/">home </a>
        </Link>
        <Link href="/projects">
            <a href="/projects">projects </a>
        </Link>
        <Link href="/about">
            <a href="/about">about </a>
        </Link>
    </nav>
);

export default Sidebar;
