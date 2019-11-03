/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import React from 'react';
import content from '../content/home.md';
import { ImportProjects } from './projects/index';
import ImageSlider from '../components/imageSlider';
import Grid from '../components/Grid';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Home: any = (props) => {
  const { projectList } = props;
  const { attributes, html } = content;
  return (
    <main>
      <h1>{attributes.title}</h1>
      <article>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <section>
          <Grid>
            {/* HÄR LANGAR VI IN EN KARUSELL MED ALLA BILDER - ORDNING BESTÄMS AV ALT-TAGGEN? */}
            {projectList && projectList.map((project) => (
              <ImageSlider
                key={project.attributes.slug}
                images={project.attributes.thumbnail && project.attributes.thumbnail}
              />
            ))}
          </Grid>
        </section>
      </article>
    </main>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
Home.getInitialProps = async () => {
  const projectList = await ImportProjects();
  return {
    projectList,
  };
};

export default Home;
