import React from "react";
import { Link } from "react-router-dom";

class TempFeatured extends React.Component {
	handleClick() {
		return e => {
			e.preventDefault();
			this.props.logout();
		};
	}

	render() {
		return (
			<div className="temp-browse-page">
				<div className="temp-browse-main">
					<div className="temp-browse-header">Welcome to Ghiblify!!</div>
					<div className="temp-browse-logout" onClick={this.handleClick()}>
						<Link to="/signup" style={{ textDecoration: "none" }}>
							<div className="temp-browse-logout-text">Logout</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default TempFeatured;
