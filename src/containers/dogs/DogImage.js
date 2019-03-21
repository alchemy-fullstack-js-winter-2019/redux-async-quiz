import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Dog from '../../components/dogs/Dog';
import { fetchDog } from '../../actions/dogs';
import { getDogImage } from '../../selectors/dogs';

class DogImage extends PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Dog {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  image: getDogImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);
