import React from "react";
// import PlayIcon from "./play_icon";

class PlayButtonOverlay extends React.Component {
	playCollection() {
		return e => {
			e.preventDefault();
			e.stopPropagation();
			let { updateTrackList, tracks } = this.props;
			// let { updateTrackList } = this.props;
			// let song = {
			// 	id: 19,
			// 	title: "One Summer's Day",
			// 	duration: 189,
			// 	artistId: 4,
			// 	albumId: 7,
			// 	songUrl:
			// 		"/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8da6af2a017728e11b674ee8c3921c1e1fd7b258/ano.mp3"
			// };
			// let tracks = [song];
			updateTrackList(tracks);
		};
	}

	render() {
		let icon;
		this.props.overlayIcon
			? (icon = <i className="fas fa-plus" />)
			: (icon = <i className="far fa-play-circle" />);

		if (this.props.overlayIcon) {
			//adding song to this specific playlist
			return (
				<div className="play-button-overlay">
					<div className="play-button">{icon}</div>
				</div>
			);
		} else {
			return (
				//playing playlist/album (aka update state.ui.musicPlayer.trackList)
				<div className="play-button-overlay">
					<div className="play-button" onClick={this.playCollection()}>
						{icon}
					</div>
				</div>
			);
		}
	}
}

export default PlayButtonOverlay;
