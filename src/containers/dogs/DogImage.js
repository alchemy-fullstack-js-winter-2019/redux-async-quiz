import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDog } from '../../actions/dogs';
import { getDog } from '../../selectors/dogs';
import Image from '../../components/dogs/Image';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    dogImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      < >
        <Image {...this.props}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  dogImage: getDog(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
