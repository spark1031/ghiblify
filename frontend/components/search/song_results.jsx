import React from "react";
import SongsContainer from "../song/songs_container";

class SongResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { songs } = this.props;
		return <SongsContainer songs={songs} />;
	}
}

export default SongResults;
