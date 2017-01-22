import React, { Component } from 'react';

class L extends Component {
  render() {

    const { children, hrefLink } = this.props;

    return (
      <a href={hrefLink} target="_blank" className="link sans-serif dib blue hover-light-blue fw7">
        {children}
      </a>
    );
  }
}

export default L;
