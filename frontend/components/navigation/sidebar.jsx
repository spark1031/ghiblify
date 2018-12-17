import React from "react";
import { Link } from "react-router-dom";
import LogoutButtonContainer from "../_button/logout_button_container";
import SearchIcon from "./search_icon";
// import TotoroLogo from "../navigation/totoro_logo";

// sampleProps: {
//   sidebarItemInfos: [
//     {
//       to: "/search",
//       icon: component (SearchIcon),
//       displayText: string ("browse")
//     },
//     {
//       to: "/browse",
//       icon: component (HomeIcon),
//       displayText: string ("browse")
//     },
//     {
//       to: "/library",
//       icon: component (LibraryIcon),
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
							{/* <img
								height="50px"
								width="50px"
								className="totoro-logo"
								src="/../ghiblify_app/app/assets/images/totoroForChip.svg"
								alt=""
							/>
							<div className="totoro-logo" />
							<TotoroLogo className="totoro-logo" /> */}
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
	const { to, icon, displayText } = itemInfo;
	return (
		<Link to={to} style={{ textDecoration: "none" }}>
			<div className="sidebar-item">
				{icon}
				<div className="sidebar-item-text">{displayText}</div>
			</div>
		</Link>
	);
};

export default Sidebar;
