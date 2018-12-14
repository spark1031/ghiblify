import {
  connect
} from 'react-redux';
import {
  logout
} from '../../actions/session_actions';
import LogoutButton from './logout_button';


const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(LogoutButton);