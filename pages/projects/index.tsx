import React from 'react';
import Link from 'next/link';
import { Grid } from '../../components/Grid';
import ImageSlider from '../../components/imageSlider';

export const importProjects = async () => {
    const markdownContext = require.context('../../content/projects', false, /\.md$/);
    const markdownFiles = markdownContext
        .keys()
        .map(relativePath => relativePath.substring(2));
    return Promise.all(
        markdownFiles.map(async path => {
            const markdown = await import(`../../content/projects/${path}`);
            return { ...markdown, slug: path.substring(0, path.length - 3) };
        })
    );
};


const Projects = (props) => {
    const { projectList } = props
    return (
        <div>
            <Grid>
                {/* HÄR LANGAR VI IN EN KARUSELL MED ALLA BILDER - ORDNING BESTÄMS AV ALT-TAGGEN? */}
                {projectList && projectList.map((project: any) => (
                    <ImageSlider
                        key={project.attributes.slug}
                        images={project.attributes.thumbnail && project.attributes.thumbnail} />
                ))}
            </Grid>
        </div>
    )
}

Projects.getInitialProps = async () => {
    const projectList = await importProjects();
    return {
        projectList
    }
}

export default Projects