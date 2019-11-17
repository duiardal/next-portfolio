import React from 'react';
import content from '../../content/about.md';
import Main from '../../layout/main-content';

const About= () => {
  const { attributes, html } = content;
  return (
    <>
      <Main>
        <h1>{attributes.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Main>
    </>
  );
};

export default About;
