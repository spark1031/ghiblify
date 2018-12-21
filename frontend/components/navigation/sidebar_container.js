import Sidebar from './sidebar';
import {
  connect
} from 'react-redux';

import {
  withRouter
} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  // let user;
  // currentUser ? user = currentUser : user = undefined;
  return {
    sidebarItemInfos: ownProps.sidebarItemInfos,
    currentUser
  };
};

export default withRouter(connect(mapStateToProps, null)(Sidebar));