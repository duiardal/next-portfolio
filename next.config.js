// eslint-disable-next-line import/newline-after-import
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const projectsFolder = './content/projects';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getPathsForProjects = () => fs
  .readdirSync(projectsFolder)
  .map((projectName) => {
    const trimmedName = projectName.substring(0, projectName.length - 3);
    return {
      [`/projects/project/${trimmedName}`]: {
        page: '/projects/project/[slug]',
        query: {
          slug: trimmedName,
        },
      },
    };
  })
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});

module.exports = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  webpack: (configuration) => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader',
    });
    return configuration;
  },
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForProjects(),
    };
  },
};
