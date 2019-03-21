import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getDogs } from '../selectors/dogs';
import { fetchDogsWithAPromise } from '../actions/dogs';
import { Image } from '../components/image/Image';


class DogImage extends PureComponent {
  static propTypes = {
    status: PropTypes.string.isRequired,
    message:PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetch();
  }
  render() {
    return (
      <Image {...this.props} />
    );
  }
}
const mapStateToProps = state => ({
  message: getDogs(state)

});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDogsWithAPromise());
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);

