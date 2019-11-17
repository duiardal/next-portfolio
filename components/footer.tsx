import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  min-height: 10vh;
  display: flex;
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const Footer = (() => (
  <StyledFooter>
    <nav>
        © Dúi Ardal
    </nav>
  </StyledFooter>
)
);

export default Footer;
