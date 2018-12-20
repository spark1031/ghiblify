import React from "react";
// import SongsListContainer?

class SongResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { songs } = this.props;
		let songResults = songs.map(song => <div>{song.title}</div>);
		return <div>{songResults}</div>;
	}
}

export default SongResults;
