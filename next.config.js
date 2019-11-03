import { readdirSync } from 'fs';

const projectsFolder = './content/projects';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getPathsForProjects = () => readdirSync(projectsFolder)
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function webpack(configuration) {
  configuration.module.rules.push({
    test: /\.md$/,
    use: 'frontmatter-markdown-loader',
  });
  return configuration;
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function exportPathMap(defaultPathMap) {
  return {
    ...defaultPathMap,
    ...getPathsForProjects(),
  };
}
