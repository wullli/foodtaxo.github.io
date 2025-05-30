import React from 'react';
import { render } from 'react-dom';

export default class Authors extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 1 column on mobile, 3 on medium screens and up
    const authorClass = 'uk-width-1-1 uk-width-1-1@m';
    const affliationClass = `uk-width-1-1`;
    return (
      <div>
        <div
          className="uk-text-primary uk-text-center uk-flex-center uk-grid-collapse uk-margin-small-top"
          data-uk-grid
        >
          {this.props.authors.map((author, idx) => {
            return (
              <span className={authorClass} key={'author-' + idx}>
                <a target="_blank" className="uk-link-toggle" href={author.url}>
                  {author.name}
                </a>
                <sup>{author.affiliation.join(',')}</sup>
              </span>
            );
          })}
        </div>
        <div
          className="uk-text-primary uk-text-center uk-grid-collapse uk-margin-medium-top"
          data-uk-grid
        >
          {this.props.affiliations.map((affiliation, idx) => {
            return (
              <span className={affliationClass} key={'affiliation-' + idx}>
                <sup>{idx + 1}</sup>
                {affiliation}
              </span>
            );
          })}
          <span className="uk-width-1-1 uk-margin-small-top">
            {this.props.meta}
          </span>
        </div>
      </div>
    );
  }
}
