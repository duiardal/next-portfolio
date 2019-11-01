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
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return cfg;
    },
    async exportPathMap(defaultPathMap) {
        return {
            ...defaultPathMap,
            ...getPathsForProjects(),
        };
    },
}