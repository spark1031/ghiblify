import React from "react";
// import PlayIcon from "./play_icon";

class PlayButtonOverlay extends React.Component {
	render() {
		let icon;
		this.props.overlayIcon
			? (icon = <i className="fas fa-plus" />)
			: (icon = <i className="far fa-play-circle" />);
		return (
			<div className="play-button-overlay">
				<div className="play-button">{icon}</div>
			</div>
		);
	}
}

export default PlayButtonOverlay;
