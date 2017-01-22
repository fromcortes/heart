import React, { Component } from 'react';

class Image extends Component {
  render() {

    const { imgSrc, imgAlt } = this.props;

    return (
      <div className="w-80-l w-100 center">
        <img src={imgSrc} alt={imgAlt} />
      </div>
    );
  }
}

export default Image;