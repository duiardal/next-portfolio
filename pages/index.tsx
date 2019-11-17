import React from 'react';
import content from '../content/home.md';
import { ImportProjects } from './projects/index';
import { ImageSlider } from '../components/imageSlider';
import Grid from '../components/Grid';
import { Heading1 } from '../components/text'

const Home = (props: { projectList: Object[]; }) => {
  const { projectList } = props;
  const { attributes, html } = content;
  return (
    <>
      <Heading1>{attributes.title}</Heading1>
      <article>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <section>
          <Grid>
            {/* HÄR LANGAR VI IN EN KARUSELL MED ALLA BILDER - ORDNING BESTÄMS AV ALT-TAGGEN? */}
            {props && projectList.map((project: { attributes: { slug: string; thumbnail: string; }; }) => (
              <ImageSlider
                key={ project.attributes && project.attributes.slug}
                images={project.attributes.thumbnail && project.attributes.thumbnail}
              />
            ))}
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
