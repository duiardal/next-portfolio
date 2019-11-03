import React from 'react';
import Link from 'next/link';

const importProjects = async () => {
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


const Projects = (props: any) => {
    const { projectList } = props
    return (
        <div>
            <h2>List of projects:</h2>
            {projectList && projectList.map((project: any) => (
                <li key={project.attributes.title}>
                    <Link href={`projects/project/${project.slug}`}>
                        <a>{project.attributes.title}</a>
                    </Link>
                </li>
            ))}
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