import React from "react";
import { Link } from "react-router-dom";
import LogoutButtonContainer from "../logout/logout_button_container";

// sampleProps: {
//   sidebarItemInfos: [
//     {
//       to: "/search",
//       iconClassName: string ("house"),
//       displayText: string ("browse")
//     },
//     {
//       to: "/browse",
//       iconClassName: string ("house"),
//       displayText: string ("browse")
//     },
//     {
//       to: "/browse",
//       iconClassName: string ("house"),
//       displayText: string ("browse")
//     }
//   ]
// }

class Sidebar extends React.Component {
	render() {
		let links = this.props.sidebarItemInfos.map((item, i) => (
			<SidebarItem key={i} itemInfo={item} />
		));

		return (
			<div className="sidebar-main">
				{links}
				<LogoutButtonContainer />
			</div>
		);
	}
}

const SidebarItem = props => {
	const { itemInfo } = props;
	const { to, iconClassName, displayText } = itemInfo;
	return (
		<Link to={to} style={{ textDecoration: "none" }}>
			<div className="sidebar-item">
				<i className={iconClassName} />
				<div>{displayText}</div>
			</div>
		</Link>
	);
};

export default Sidebar;
