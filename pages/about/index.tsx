/* eslint-disable react/no-danger */
import React from 'react';
import { NextPage } from 'next';
import content from '../../content/about.md';

const About: NextPage = () => {
  const { attributes, html } = content;
  return (
    <>
      <main>
        <h1>{attributes.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
};

export default About;
