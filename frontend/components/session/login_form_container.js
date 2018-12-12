import SessionForm from './session_form';
import {
  connect
} from 'react-redux';
import {
  login,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    fields: ["username", "password"],
    formType: "Login",
    currentUserId: state.session.id,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);