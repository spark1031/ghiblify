import React from "react";
import { Link } from "react-router-dom";

//sample props = {
// 	to: string ("/signup"),
// 	buttonType: string ("LOG OUT"),
// 	action: action creator (() => dispatch(logout()))
// }

//Button
class Button extends React.Component {
	handleClick() {
		return e => {
			e.preventDefault();
			this.props.action();
		};
	}
	render() {
		const { buttonType, to } = this.props;
		let buttonContent;
		if (to) {
			buttonContent = (
				<Link to={to} style={{ textDecoration: "none" }}>
					<div className="_button-text">{buttonType}</div>
				</Link>
			);
		} else {
			buttonContent = <div className="_button-text">{buttonType}</div>;
		}
		return (
			<div className="_button" onClick={this.handleClick()}>
				{buttonContent}
			</div>
		);
	}
}

export default Button;

// for createPlaylist:
// playlist MUST be sent in this format:
// let playlist = { name: "Worst of 2018", creatorId: 1 };
