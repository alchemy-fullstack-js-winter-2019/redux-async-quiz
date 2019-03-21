import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Image extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired
  };
  render() {
    const { url } = this.props;
    return (
      <img src={url}/>
    );
  }
}
