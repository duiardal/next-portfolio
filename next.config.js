const fs = require('fs');
const withTypescript = require("@zeit/next-typescript")
const projectsFolder = './content/projects';

const getPathsForProjects = () => {
    return fs
        .readdirSync(projectsFolder)
        .map(projectName => {
            const trimmedName = projectName.substring(0, projectName.length - 3);
            return {
                [`/projects/projects/${trimmedName}`]: {
                    page: '/projects/projects/[slug]',
                    query: {
                        slug: trimmedName,
                    },
                },
            };
        })
        .reduce((acc, curr) => {
            return { ...acc, ...curr };
        }, {});
};

module.exports = {
    exportTrailingSlash: true,
    webpack: configuration => {
        configuration.module.rules.push({
            test: /\.md$/,
            use: 'frontmatter-markdown-loader',
        });
        return configuration;
    },
    // async exportPathMap(defaultPathMap) {
    //     return {
    //         ...defaultPathMap,
    //         ...getPathsForProjects(),
    //     };
    // },
    async exportPathMap() {
        const paths = {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };
        return paths, getPathsForProjects;
    }
};