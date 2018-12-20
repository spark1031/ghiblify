import React from "react";
import PlaylistContainer from "../playlist/playlist_container";

class PlaylistResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { playlists } = this.props;
		return <PlaylistContainer playlists={playlists} />;
	}
}

export default PlaylistResults;
