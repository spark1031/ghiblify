import React from "react";
// import PlayIcon from "./play_icon";

// props:
// overlayIcon = { overlayIcon }
// onClick

class PlayButtonOverlay extends React.Component {
	// playCollection() {
	// 	return e => {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 		let { updateTrackList, tracks } = this.props;
	// 		updateTrackList(tracks);
	// 	};
	// }

	playButtonClicked() {
		return e => {
			e.preventDefault();
			e.stopPropagation();
			let { onClick } = this.props;
			onClick();
		};
	}

	render() {
		let icon;
		// this.props.overlayIcon
		// 	? (icon = <i className="fas fa-plus" />)
		// 	: (icon = <i className="far fa-play-circle" />);

		this.props.selfIsPlaying
			? (icon = <i className="far fa-pause-circle" />)
			: (icon = <i className="far fa-play-circle" />);

		if (this.props.overlayIcon) {
			//adding song to this specific playlist
			return (
				<div className="play-button-overlay">
					<div className="play-button"><i className="fas fa-plus" /></div>
				</div>
			);
		} else {
			return (
				//playing playlist/album (aka update state.ui.musicPlayer.trackList)
				<div className="play-button-overlay">
					<div className="play-button" onClick={this.playButtonClicked()}>
						{icon}
					</div>
				</div>
			);
		}
	}
}

export default PlayButtonOverlay;
