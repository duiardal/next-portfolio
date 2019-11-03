import React from 'react';
import Link from 'next/link';

const Header = () => (
  <header>
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
  </header>
);

export default Header;
