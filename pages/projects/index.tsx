import React from 'react';
import Grid from '../../components/Grid';
import ImageGrid from '../../components/image-grid';

export const ImportProjects = async () => {
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


const Projects = (props: { projectList: any; }) => {
  const { projectList } = props;
  return (
    <Grid>
      {/* HÄR LANGAR VI IN EN KARUSELL MED ALLA BILDER - ORDNING BESTÄMS AV ALT-TAGGEN? */}
      {projectList && projectList.map((project: any) => (
        <ImageGrid
          key={project.attributes.slug}
          images={project.attributes.thumbnail && project.attributes.thumbnail}
        />
      ))}
    </Grid>
  );
};

Projects.getInitialProps = async () => {
  const projectList = await ImportProjects();
  return {
    projectList,
  };
};

export default Projects;
