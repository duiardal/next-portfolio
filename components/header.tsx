import React from 'react';
import Link from 'next/link';

const Header = () => {
    return (
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
    )
}

export default Header;