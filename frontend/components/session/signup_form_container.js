import SessionForm from './session_form';
import {
  connect
} from 'react-redux';
import {
  signup,
  receiveErrors,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    fields: ["username", "email", "password"],
    formType: "SIGN UP",
    currentUserId: state.session.id,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);