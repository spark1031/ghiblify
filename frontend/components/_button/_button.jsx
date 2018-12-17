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
		const { buttonType, to, color } = this.props;
		let buttonTextClass = "_button-text"; //default is white
		let buttonClass = "_button"; //default is green

		if (color === "white") {
			buttonTextClass = "_button-text-black";
			buttonClass = "_button-white";
		} else if (color === "transparent") {
			buttonClass = "_button-transparent";
		}

		let buttonContent;
		if (to) {
			buttonContent = (
				<Link to={to} style={{ textDecoration: "none" }}>
					<div className={buttonTextClass}>{buttonType}</div>
				</Link>
			);
		} else {
			buttonContent = <div className={buttonTextClass}>{buttonType}</div>;
		}
		return (
			<div className={buttonClass} onClick={this.handleClick()}>
				{buttonContent}
			</div>
		);
	}
}

export default Button;

// for createPlaylist:
// playlist MUST be sent in this format:
// let playlist = { name: "Worst of 2018", creatorId: 1 };
