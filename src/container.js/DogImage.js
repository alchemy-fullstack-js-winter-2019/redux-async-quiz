import { connect } from 'react-redux';
import Image from '../components/Image';
import { fetchDog } from '../actions/dog';
import { getDog } from '../selectors/dogSelector';

const mapStateToProps = state => ({
  dog: getDog(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUsers() {
    dispatch(fetchDog());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

