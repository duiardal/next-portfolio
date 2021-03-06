import React from 'react';
import content from '../../content/about.md';

const About = () => {
  const { attributes, html } = content;
  return (
    <>
      <h1>{attributes.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default About;
