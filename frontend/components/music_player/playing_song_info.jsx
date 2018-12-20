import React from "react";
import { Link } from "react-router-dom";

class PlayingSongInfo extends React.Component {
	render() {
		const { currentSong, currentSongAlbum, currentSongArtistName } = this.props;
		return !currentSong ? (
			<div className="song-info col-3-11" />
		) : (
			<div className="song-info col-3-11">
				<section className="song-info-cover-art">
					<Link
						to={`/albums/${currentSong.albumId}`}
						style={{ textDecoration: "none" }}
					>
						<img
							className="song-info-album-cover"
							src={currentSongAlbum.coverUrl}
						/>
					</Link>
				</section>
				<section className="song-info-links">
					<Link
						className="album-link"
						to={`/albums/${currentSong.albumId}`}
						style={{ textDecoration: "none" }}
					>
						<span>{currentSong.title}</span>
					</Link>
					<Link
						className="artist-link"
						// to={`/artists/${currentSong.artistId}`}
						to="/library/artists"
						style={{ textDecoration: "none" }}
					>
						<span>{currentSongArtistName}</span>
					</Link>
				</section>
				<section className="song-info-add-song" />
			</div>
		);
	}
}

export default PlayingSongInfo;
