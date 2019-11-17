import React from 'react';
import { Heading1 } from '../components/text'
import styled from 'styled-components';
import Link from 'next/link';

const HeaderElement = styled.header`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const StyledHeading = styled(Heading1)`
  min-height: 10vh;
`

const Header = () => (
  <HeaderElement>
    <StyledHeading>
      <Link href="/">
        <a href="/">Dúi Ardal</a>
      </Link>
    </StyledHeading>
  </HeaderElement>
);

export default Header;
