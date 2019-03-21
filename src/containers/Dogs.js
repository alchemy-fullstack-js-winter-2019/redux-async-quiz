import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Image from '../components/Image';
import { connect } from 'react-redux';
import { getDogSelect, isLoading } from '../selectors/dogs';
import { fetchDog } from '../actions/dogs';

class Dogs extends PureComponent {
  static propTypes = {
    dog: PropTypes.object,
    loading: PropTypes.bool,
    fetch: PropTypes.func
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Image 
        dog={this.props.dog}
        loading={this.props.loading}
        fetch={this.props.fetch}
      />
    );
  }
}

const mapStateToProps = state => ({
  dog: getDogSelect(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dogs);

