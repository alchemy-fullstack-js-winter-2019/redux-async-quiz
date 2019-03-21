import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from '../components/Image';
import { fetchMessage } from '../actions/dogActions';
import { getMessage } from '../selectors/dogSelectors';
import App from '../components/app';

class DogImage extends PureComponent {

  static propTypes = {
    message: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetch();
  }
  
  render() {
    return (
      <>
      <Image {...this.props}/>
      <App {...this.props} />
      </>
    );
  }

}

const mapStateToProps = state => ({
  message: getMessage(state),
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(event) {
    event.preventDefault();
    dispatch(fetchMessage());
  } 
  // fetch() {
  //   dispatch(fetchMessage());
  // }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogImage);

