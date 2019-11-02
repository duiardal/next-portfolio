import React, { Component, Props } from 'react';
import Link from 'next/link';

const importProjects = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched

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

const Projects = (props: any) => (
    <div>
        {props && props.projects.map((project: any) => (
            <li key={props && props.attributes && props.attributes.slug}>
                <p>{project}</p>
            </li>
        ))}
        {/* {this.props.projectList.forEach((currentProject: any) =>
                    <Link href={`projects/project/${currentProject.slug}`}>
                        <a>
                            <h2>{currentProject.attributes.title}</h2>
                        </a>
                    </Link>)
                } */}
    </div>
)

Projects.getInitialProps = async function() {
    const projectList = await importProjects();
    return {
        projects: projectList.map(entry => entry.project)
    }
}

export default Projects