import React from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";

// props: {
//   song: { songObject }
//   addSongToPlaylist: { addSongToPlaylist }
//   removeSongFromPlaylist: { removeSongFromPlaylist }
//   addToLibrary: (later)
//   removeFromLibrary: (later)
// }

// NEEDED BUT DONT HAVE YET 11:58PM, TUES
//isPlaying
//	-> if (isPlaying) => change returned divs GREEN, else divs should be WHITE
//togglePlaying

class SongListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
			isDropDownOpen: false
		};
	}

	toggleHover(isHovering) {
		return () => {
			this.setState({ isHovering });
		};
	}

	showDropDown() {
		return e => {
			e.preventDefault();
			this.setState({ isDropDownOpen: true });
			// document.addEventListener("click", this.hideDropDown());
		};
	}

	hideDropDown() {
		return e => {
			e.preventDefault();
			this.setState({ isDropDownOpen: false });
			// document.removeEventListener("click", this.hideDropDown());
		};
	}

	handleAddToPlaylist() {
		return e => {
			let songId = this.props.song.id;
			this.props.openModal("addToPlaylist", { songId });
		};
	}

	render() {
		const {
			song,
			removeSongFromPlaylist,
			typeObject,
			type,
			currentUserId
		} = this.props; //typeObject = album/playlist object, non-hydrated; song = array of song objects
		//song = {
		// 	id:
		// 	title:
		// 	duration:
		// 	artistId:
		// 	albumId:
		// 	playlistSongsKey: (fetched through selector when I hydrate single playlist)
		// }

		const songDropdown = (
			<div className="song-dropdown">
				<div onClick={this.handleAddToPlaylist()} className="dropdown">
					Add to Your Playlists
				</div>

				{type === "playlist" && +currentUserId === +typeObject.creatorId ? (
					<div
						onClick={e => removeSongFromPlaylist(song.playlistSongsKey)}
						className="dropdown"
					>
						Remove from Current Playlist
					</div>
				) : (
					""
				)}
			</div>
		);

		let dropdownMenu = <div className="dropdown-menu">{songDropdown}</div>;
		if (!this.state.isDropDownOpen) dropdownMenu = null;

		const moreButton = this.state.isHovering ? (
			<div className="song-dropdown-wrapper">
				<div className="dropdown-handler" onClick={this.showDropDown()}>
					•••
				</div>
				{dropdownMenu}
			</div>
		) : null;

		const minutes = Math.floor(song.duration / 60);
		let seconds = song.duration % 60;
		if (seconds < 10) {
			seconds = `0${seconds}`;
		}
		const duration = `${minutes}:${seconds}`;
		return (
			<div
				className="song-list-item"
				onMouseEnter={this.toggleHover(true)}
				onMouseLeave={this.toggleHover(false)}
			>
				<div className="icon-title">
					<div className="musical-note-icon" onClick={this.props.togglePlaying}>
						<i className="fas fa-music" />
					</div>
					<div className="title">{song.title}</div>
				</div>

				<div className="duration" onMouseLeave={this.hideDropDown()}>
					{moreButton}
					{duration}
				</div>
			</div>
		);
	}
}

export default SongListItem;
