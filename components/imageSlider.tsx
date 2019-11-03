import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    grid-column: span 3;
    @media screen and (max-width: 768px) {
        grid-column: span 6;
    }
`;

const Image = styled.img`
    width: 100%;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageSlider: any = (imageSrc: any) => (
  <ImageContainer>
    <Image src={imageSrc.images} />
  </ImageContainer>
);

export default ImageSlider;
