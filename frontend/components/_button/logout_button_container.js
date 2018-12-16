import {
  connect
} from 'react-redux';
import {
  logout
} from '../../actions/session_actions';
import Button from './_button';


const mapStateToProps = (state) => {
  return {
    buttonType: "LOG OUT",
    to: "/signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);