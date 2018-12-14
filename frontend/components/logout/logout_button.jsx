import React from "react";
import { Link } from "react-router-dom";

//logoutButton
class LogoutButton extends React.Component {
	handleClick() {
		return e => {
			e.preventDefault();
			this.props.logout();
		};
	}
	render() {
		return (
			<div className="temp-browse-logout" onClick={this.handleClick()}>
				<Link to="/signup" style={{ textDecoration: "none" }}>
					<div className="temp-browse-logout-text">Logout</div>
				</Link>
			</div>
		);
	}
}

export default LogoutButton;

// for createPlaylist:
// playlist MUST be sent in this format:
// let playlist = { name: "Worst of 2018", creatorId: 1 };
