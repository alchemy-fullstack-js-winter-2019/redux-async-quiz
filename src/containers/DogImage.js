import { connect } from 'react-redux';
import Image from '../components/image/Image';
import { fetchDog } from '../actions/dogs';
import { getDog } from '../services/dogsApi';

const mapStateToProps = state => ({
  dogImage: getDog(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
