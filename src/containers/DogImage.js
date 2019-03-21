import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import ImageDisplay from '../components/image/ImageDisplay';
import { getDogImage } from '../selectors/dogs';
import { fetchImage } from '../actions/dogs';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  dogImage: getDogImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchImage(1));
  }
});

class DogImage extends PureComponent {
    static propTypes = {
      dogImage: PropTypes.string.isRequired,
      fetch: PropTypes.func.isRequired
    };
  
    componentDidMount() {
      this.props.fetch();
    }
  
    render() {
      const { dogImage } = this.props;
      return (
        <ImageDisplay dogImage={dogImage} />
      );
    }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(DogImage);
