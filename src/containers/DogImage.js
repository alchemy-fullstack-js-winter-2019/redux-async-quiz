import Image from '../components/Image';
import { connect } from 'react-redux';
import { getDog } from '../selectors/dogs';
import { fetchDog } from '../actions/dogs';

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
)(Image);
