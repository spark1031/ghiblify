import React from "react";
import ArtistsContainer from "../artist/artists_container";

class ArtistResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { artists } = this.props;
		return <ArtistsContainer artists={artists} />;
	}
}

export default ArtistResults;
