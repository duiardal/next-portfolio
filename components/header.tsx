import React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';

const Header: NextPage = () => (
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
