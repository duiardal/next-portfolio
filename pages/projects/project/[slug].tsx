import React, { Component } from 'react';

interface Props {
    project: any;
}

class Post extends Component<Props> {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const project = await import(`../../../content/projects/${slug}.md`).catch(error => null);

    return { project };
  }
  render() {

    if (!this.props.project) {
        return <div>not found</div>;
    }
    else {

    const {
        html,
        attributes: { title },
        } = this.props.project.default;

        return (
        <>
            <article>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            </article>
        </>
        );
    }
  }
}

export default Post;