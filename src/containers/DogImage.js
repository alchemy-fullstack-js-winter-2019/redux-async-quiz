import { connect } from 'react-redux';
import { fetchImage } from '../actions/image';
import Image from '../components/image/Image';
import { getImage, isLoading } from '../selectors/image';
import { withFetch } from '../components/withFetch';

const mapStateToProps = state => ({
  image: getImage(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchImage());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Image));
