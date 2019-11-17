import React from 'react';
import content from '../content/home.md';
import { ImportProjects } from './projects/index';
import { ImageSlider } from '../components/imageSlider';
import Grid from '../components/Grid';
import { Heading1 } from '../components/text'
import Slider from "react-slick";
import styled from 'styled-components';

const Image = styled.img`
`

const StyledSlider = styled(ImageSlider)`

`

const renderImage = (item: any) => (
    <Image src={item.image} />
)

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { attributes } = content;
  return (
    <>
      <Heading1>{attributes.title}</Heading1>
      <article>
        <section>
          <Grid>
            <StyledSlider {...settings}
            >
              {attributes.carousel.map(renderImage)}
            </StyledSlider>
          </Grid>
        </section>
      </article>
    </>
  );
};

Home.getInitialProps = async () => {
  const projectList = await ImportProjects();
  return {
    projectList,
  };
};

export default Home;
