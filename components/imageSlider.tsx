import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    grid-column: span 3;
`

const Image = styled.img`
    width: 100%;
`

const ImageSlider = (imageSrc: any) => {
    return (
        <ImageContainer>
            <Image src={imageSrc.images}/>
        </ImageContainer>
    )
}

export default ImageSlider;
