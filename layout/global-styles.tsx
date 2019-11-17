import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 1vw;
        min-height: 100vh;
    }
    a {
        color: black;
        text-decoration: none;
        transition: color 50ms;
        &:hover {
            color: grey;
        }
    }
`