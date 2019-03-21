import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getDogs } from '../services/dogs';
import { fetchDogs } from '../actions/dogs';
import Image from '../components/Image';

class ImageContainer extends PureComponent {
  static propTypes = {
    dog: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Image {...this.props}/>
    );
  }

}

const mapStateToProps = state => ({
  dog: getDogs(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDogs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageContainer);
