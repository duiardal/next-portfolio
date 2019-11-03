import React from 'react';

const Project = (project) => {
  if (!project) {
    return <div>not found!</div>;
  }

  const { html, attributes: { title } } = project.default;
  return (
    <>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

Project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const project = await import(`../../../content/projects/${slug}.md`).catch(() => null);

  return { project };
};

export default Project;
