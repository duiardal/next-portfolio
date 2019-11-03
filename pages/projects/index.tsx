/* eslint-disable react/prop-types */
import React from 'react';
import Grid from '../../components/Grid';
import ImageSlider from '../../components/imageSlider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ImportProjects: any = async () => {
  const markdownContext = require.context('../../content/projects', false, /\.md$/);
  const markdownFiles = markdownContext
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/projects/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    }),
  );
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Projects: any = (props) => {
  const { projectList } = props;
  return (
    <div>
      <Grid>
        {/* HÄR LANGAR VI IN EN KARUSELL MED ALLA BILDER - ORDNING BESTÄMS AV ALT-TAGGEN? */}
        {projectList && projectList.map((project) => (
          <ImageSlider
            key={project.attributes.slug}
            images={project.attributes.thumbnail && project.attributes.thumbnail}
          />
        ))}
      </Grid>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
Projects.getInitialProps = async () => {
  const projectList = await ImportProjects();
  return {
    projectList,
  };
};

export default Projects;
