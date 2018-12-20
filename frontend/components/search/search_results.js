import React from "react";
import { connect } from "react-redux";
import { NavLink, Route, withRouter } from "react-router-dom";

import PlaylistResults from "./playlist_results";
import SongResults from "./song_results";
import AlbumResults from "./album_results";
import ArtistResults from "./artist_results";

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { playlists, songs, albums, artists, query } = this.props.searches;
		let playlistResults;
		playlists
			? (playlistResults = playlists.map(playlist => (
					<div>{playlist.name}</div>
			  )))
			: (playlistResults = null);

		let songResults;
		songs
			? (songResults = songs.map(song => <div>{song.title}</div>))
			: (songResults = null);

		let albumResults;
		albums
			? (albumResults = albums.map(album => <div>{album.title}</div>))
			: (albumResults = null);

		let artistResults;
		artists
			? (artistResults = artists.map(artist => <div>{artist.name}</div>))
			: (artistResults = null);

		// console.warn(playlistResults);

		let allResults = () => (
			<div className="all-results">
				<div className="category">
					<div className="header">Playlists</div>
					{playlistResults}
					{/* <PlaylistResults playlists={playlists} /> */}
				</div>
				<div className="category">
					<div className="header">Albums</div>
					{albumResults}
					{/* <AlbumResults albums={albums} /> */}
				</div>
				<div className="category">
					<div className="header">Artists</div>
					{artistResults}
					{/* <ArtistResults artists={artists} /> */}
				</div>
				<div className="category">
					<div className="header">Songs</div>
					{songResults}
					{/* <SongResults songs={songs} /> */}
				</div>
			</div>
		);

		return (
			<main className="index-page-wrapper">
				<div className="music-index">
					<div className="music-index-wrapper">
						{" "}
						<Route path={`/search/results/${query}`} component={allResults} />
					</div>{" "}
				</div>{" "}
			</main>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	searches: state.entities.searches
});

export default withRouter(
	connect(
		mapStateToProps,
		null
	)(SearchResults)
);
