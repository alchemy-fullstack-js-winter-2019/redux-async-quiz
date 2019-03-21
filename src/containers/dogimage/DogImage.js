import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Image from '../../components/image/Image';
import { getUrl } from '../../selectors/dogs';
import { fetchDog } from '../../actions/dogs';

const mapStateToProps = state => ({
  url: getUrl(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

class DogImage extends PureComponent {
  static propTypes = {
    url: PropTypes.string.isRequired,
    fetch: PropTypes.func
  }
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    const { url } = this.props;
    return (
      <Image url={url}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DogImage);
