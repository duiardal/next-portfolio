import styled from 'styled-components';

const Grid = styled.div`
    width: 100%;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(12, [col-start] 1fr);
`;

export default Grid;
