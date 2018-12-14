import React from "react";
import { Link } from "react-router-dom";
import LogoutButtonContainer from "../logout/logout_button_container";
import SearchIcon from "./search_icon";

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
				<div className="sidebar-main-links">
					<Link to="/" style={{ textDecoration: "none" }}>
						<div className="sidebar-main-logo">
							<i className="fab fa-spotify" />
							<div className="sidebar-main-logo-name">Ghiblify</div>
						</div>
					</Link>
					{links}
					<LogoutButtonContainer />
				</div>
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
				{/* <i className={iconClassName} /> */}
				<SearchIcon />
				<div className="sidebar-item-text">{displayText}</div>
			</div>
		</Link>
	);
};

export default Sidebar;
