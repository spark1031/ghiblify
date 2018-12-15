import {
  connect
} from 'react-redux';
import Library from './library';
import {
  openModal
} from '../../actions/modal_actions';

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(null, mapDispatchToProps)(Library);