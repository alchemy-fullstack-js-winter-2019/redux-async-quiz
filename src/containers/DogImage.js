import Image from '../components/Image';
import { connect } from 'react-redux';
import { getDog, isLoading } from '../selectors/dogs';
import { fetchDog } from '../actions/dogs';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  dogImage: getDog(state),
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
)(withFetch(Image));
