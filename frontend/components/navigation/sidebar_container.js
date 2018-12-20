import Sidebar from './sidebar';
import {
  connect
} from 'react-redux';

import {
  withRouter
} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    sidebarItemInfos: ownProps.sidebarItemInfos
  };
};

export default withRouter(connect(mapStateToProps, null)(Sidebar));