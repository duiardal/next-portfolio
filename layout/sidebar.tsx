import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    a {
        padding-bottom: 1em;
    }
    @media (max-width: 768px) {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        a {
            padding-bottom: 0;
        }
    }
`

const Nav = styled.nav`
    grid-column: span 2;
    @media (max-width: 768px) {
        grid-column: span 12;
    }
`

const Sidebar = () => (
    <Nav>
        <SidebarContainer>

            <Link href="/">
                <a href="/">home </a>
            </Link>
            <Link href="/projects">
                <a href="/projects">projects </a>
            </Link>
            <Link href="/about">
                <a href="/about">about </a>
            </Link>
        </SidebarContainer>
    </Nav>
);

export default Sidebar;
