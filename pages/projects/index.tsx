import React, { Component } from 'react';

import Link from 'next/link';

const PROJECTS_PATH = '../../content/projects';

const importProjects = async () => {
    // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
    // second flag in require.context function is if subdirectories should be searched
    const markdownFiles = require
        .context(PROJECTS_PATH, false, /\.md$/)
        .keys()
        .map(relativePath => relativePath.substring(2));

    return Promise.all(
        markdownFiles.map(async path => {
            const markdown = await import(`${PROJECTS_PATH}/${path}`);
            return {
                ...markdown, slug: path.substring(0, path.length - 3)
            };
        })
    );
};

interface Props {
    projectList: any
}

export default class Projects extends Component<Props> {

    static async getInitialProps() {
        const projectList = await importProjects();

        return { projectList };
    }

    render() {
        const { projectList } = this.props;
        return (
            <div >
                {projectList.map(project => {
                    return (
                        <Link href={`projects/project/${project.slug}`}>
                            <a>
                                <img src={project.attributes.thumbnail} />
                                <h2>{project.attributes.title}</h2>
                            </a>
                        </Link>
                    );
                })}
            </div>
        );
    }
}