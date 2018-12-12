import {
  connect
} from 'react-redux';
import TempFeatured from './temp_featured';
import {
  logout
} from '../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(TempFeatured);