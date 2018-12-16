import React from "react";
// import PlayIcon from "./play_icon";

class PlayButtonOverlay extends React.Component {
	render() {
		return (
			<div className="play-button-overlay">
				<div className="play-button">
					<i className="far fa-play-circle" />
				</div>
			</div>
		);
	}
}

export default PlayButtonOverlay;
