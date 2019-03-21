import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Image extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    fetchDog: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchDog();
  }

  render() {
    const { img } = this.props;
    return (
      <p>{img}</p>
    );
  }

}

export default Image;




