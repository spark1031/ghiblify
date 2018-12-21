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

	objectExtractor(resultsArray) {
		if (resultsArray === undefined) return [];
		const formattedResult = resultsArray.map(result => {
			return Object.values(result)[0];
		});
		return formattedResult;
	}

	// resultsComponentFormatter(formattedResult, type) {
	// 	if (formattedResult.length > 0) {

	// 	}
	// }

	render() {
		const { playlists, songs, albums, artists, query } = this.props.searches;

		const formattedPlaylistsArray = this.objectExtractor(playlists);
		const formattedSongsArray = this.objectExtractor(songs);
		const formattedAlbumsArray = this.objectExtractor(albums);
		const formattedArtistsArray = this.objectExtractor(artists);

		let playlistResults;
		formattedPlaylistsArray.length > 0
			? (playlistResults = (
					<div className="category">
						<div className="header">Playlists</div>
						<div className="grid-results">
							<PlaylistResults playlists={formattedPlaylistsArray} />
						</div>
					</div>
			  ))
			: (playlistResults = null);

		let albumResults;
		formattedAlbumsArray.length > 0
			? (albumResults = (
					<div className="category">
						<div className="header">Albums</div>
						<div className="grid-results">
							<AlbumResults albums={formattedAlbumsArray} />
						</div>
					</div>
			  ))
			: (albumResults = null);

		let artistResults;
		formattedArtistsArray.length > 0
			? (artistResults = (
					<div className="category">
						<div className="header">Artists</div>
						<div className="grid-results">
							<ArtistResults artists={formattedArtistsArray} />
						</div>
					</div>
			  ))
			: (artistResults = null);

		let songResults;
		formattedSongsArray.length > 0
			? (songResults = (
					<div className="category">
						<div className="header">Songs</div>
						<div className="song-results-listing">
							<SongResults songs={formattedSongsArray} />
						</div>
					</div>
			  ))
			: (songResults = null);

		let allResults = () => (
			<div className="all-results">
				<div className="all-results-header">Search Results</div>
				<div>
					{songResults}
					{playlistResults}
					{albumResults}
					{artistResults}
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

// let playlistResults;
// // console.warn(playlists);
// playlists
// 	? (playlistResults = playlists.map(playlist => {
// 			console.warn(playlist);
// 			return <div>{Object.values(playlist)[0].name}</div>;
// 	  }))
// 	: (playlistResults = null);

// let songResults;
// songs
// 	? (songResults = songs.map(song => <div>{song.title}</div>))
// 	: (songResults = null);

// let albumResults;
// albums
// 	? (albumResults = albums.map(album => <div>{album.title}</div>))
// 	: (albumResults = null);

// let artistResults;
// artists
// 	? (artistResults = artists.map(artist => <div>{artist.name}</div>))
// 	: (artistResults = null);

// console.warn(playlistResults);
