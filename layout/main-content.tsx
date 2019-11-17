import styled from "styled-components";

const Main = styled.main`
    grid-column: span 10;
    min-height: 80vh;
    @media (max-width: 768px) {
        grid-column: span 12;
    }
`

export default Main;