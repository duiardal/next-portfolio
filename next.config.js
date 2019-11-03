const fs = require('fs');
const projectsFolder = './content/projects';

const getPathsForProjects = () => {
	return fs
		.readdirSync(projectsFolder)
		.map(projectName => {
			console.log(projectName);
			const trimmedName = projectName.substring(0, projectName.length - 3);
			return {
				[`/projects/project/${trimmedName}`]: {
					page: "/projects/project/[slug]",
					query: {
						slug: trimmedName
					}
				}
			};
		})
		.reduce((acc, curr) => {
			return { ...acc, ...curr };
		}, {});
};

module.exports = {
	webpack: configuration => {
		configuration.module.rules.push({
			test: /\.md$/,
			use: "frontmatter-markdown-loader"
		});
		return configuration;
	},
	async exportPathMap(defaultPathMap) {
		return {
			...defaultPathMap,
			...getPathsForProjects()
		};
	}
};
