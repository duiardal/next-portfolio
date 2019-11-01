import React, { Component } from 'react';
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, project } } = content;
    return (
      <article>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { project.map((project, k) => (
                  <li key={k}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <img src={project.image.url}></img>
                    <a href="https://focused-heyrovsky-c3a35e.netlify.com/static/admin">admin interface</a>
                  </li>
              ))}
          </ul>
      </article>
    )
  }
}