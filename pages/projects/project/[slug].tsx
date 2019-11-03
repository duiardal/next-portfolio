import React from 'react';

const Post = (props: any) => {
  if (!props && !props.project) {
    return <div>not found</div>;
  }

  const { html, attributes: { title } } = props.project.default;
  return (
    <>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
};

Post.getInitialProps = async ({ query }) => {
  const { slug } = query;
  const project = await import(`../../../content/projects/${slug}.md`).catch(() => null);

  return { project };
};

export default Post;
