import { connect } from 'react-redux';
import Display from '../components/display/Display.js';
import { getDogAction } from '../actions/Dog.js';
import { getDog } from '../selectors/Dog.js';

const mapStateToProps = (state)=> ({
  image: getDog(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getDogAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Display);


