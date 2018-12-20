import React from "react";
import AlbumsContainer from "../album/albums_container";

class AlbumResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { albums } = this.props;
		return <AlbumsContainer albums={albums} />;
	}
}

export default AlbumResults;
