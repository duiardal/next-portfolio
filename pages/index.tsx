import React, { Component } from 'react';
import content from '../content/home.md';

export default class Home extends Component {
  render() {
    let { html , attributes:{ title, body } } = content;
    return (
      <article>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }}/>
          <ul>
              { body.map((body, k) => (
                  <li key={k}>
                    <h2>{body.name}</h2>
                    <p>{body.description}</p>
                  </li>
              ))}
          </ul>
      </article>
    )
  }
}