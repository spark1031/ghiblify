import SessionForm from './session_form';
import {
  connect
} from 'react-redux';
import {
  login,
  receiveErrors,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    fields: ["username", "password"],
    formType: "LOG IN",
    currentUserId: state.session.id,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    receiveErrors: errors => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);