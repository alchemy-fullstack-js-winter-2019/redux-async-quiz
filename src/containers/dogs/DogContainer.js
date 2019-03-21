
import { connect } from 'react-redux';
import Images from '../../components/dogs/Images';
import { getDogImage } from '../../selectors/dogs';
import { fetchImages } from '../../actions/dogs';
import { WithFetch } from '../../components/WithFetch';

const mapStateToProps = (state) => ({
  image: getDogImage(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetch() {
    console.log('fetch from conatiner');
    dispatch(fetchImages());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithFetch(Images));
