import React from 'react'
import styled from 'styled-components';
import Header from '../components/header';
import { GlobalStyle } from './global-styles';

export const DesktopHeader = styled(Header)`
`

const TopLayout = () => {
    return (
        <>
            <GlobalStyle />
            <DesktopHeader />
        </>
    )
}

export default TopLayout;

