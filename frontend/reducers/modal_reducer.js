import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions';
import * as _ from 'lodash';

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return _.merge({}, {
        type: action.modal,
        modalInfo: action.modalInfo
      });
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}