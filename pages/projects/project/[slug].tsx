/* eslint-disable react/no-danger */
import React from 'react';

const Project: { (project): JSX.Element;
  getInitialProps({ query }: { query }): Promise<{ project }>;
} = (project) => {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
Project.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const project = await import(`../../../content/projects/${slug}.md`).catch(() => null);

  return { project };
};

export default Project;
