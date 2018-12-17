import React from "react";
import Collection from "../collection/collection"; //doesn't show up? something wrong w SVG?
import CloseModalIcon from "./close_icon"; //doesn't show up? something wrong w SVG?
import Button from "../_button/_button";

// props: {
//   closeModal: () => dispatch(closeModal()),
//   addSongToPlaylist: (songId, playlistId) => dispatch(addSongToPlaylist(songId, playlistId)),
//   receiveErrors: errors => dispatch(receiveErrors(errors)),
//   clearErrors: () => dispatch(clearErrors()),
//   errors: state.errors.session,
//   currentUserId: state.session.id,
//   songId: ownProps.songId,
//   isLoaded: boolean
// }

class AddToPlaylistForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			song_id: this.props.songId,
			playlist_id: this.props.currentUserId
		};

		// this.renderErrors = this.renderErrors.bind(this);
	}

	//INPUT: playlist name
	// handleInput() {
	// 	return e => {
	// 		this.refreshErrors();
	// 		this.setState({ name: e.target.value });
	// 	};
	// }

	// //CREATE PLAYLIST BUTTON
	// handleSubmit() {
	// 	return e => {
	// 		e.preventDefault();
	// 		this.props.createPlaylist(this.state, this.props.history);
	// 		this.props.closeModal();
	// 	};
	// }

	// //if user presses "ENTER" on keyboard to SUBMIT
	// handleEnter() {
	// 	return e => {
	// 		if (e.key === "Enter") this.handleSubmit(e);
	// 	};
	// }

	// handleCancel() {
	// 	return e => {
	// 		this.setState({ name: "" });
	// 		this.props.closeModal();
	// 	};
	// }

	// renderErrors() {
	// 	if (this.props.errors.length === 0) {
	// 		return <div />;
	// 	} else {
	// 		let errors = this.props.errors.map((error, i) => (
	// 			<div key={i}>{error}</div>
	// 		));
	// 		return <div className="session-form-errors">{errors}</div>;
	// 	}
	// }

	// refreshErrors(e) {
	// 	this.props.clearErrors();
	// }

	render() {
		let {
			addSongToPlaylist,
			closeModal,
			currentUserPlaylists,
			songId
		} = this.props;
		if (currentUserPlaylists === undefined) {
			return null;
		}

		let addedMessage = null;
		const message = (
			<div className="added-message">Song added to playlist.</div>
		);

		const handleClick = (songId, playlistId) => {
			return e => {
				addSongToPlaylist(songId, playlistId);
				addedMessage = message;
				setTimeout(() => closeModal(), 100);
			};
		};
		const playlists = currentUserPlaylists.map(playlist => {
			return {
				onClick: handleClick(songId, playlist.id),
				imageUrl: playlist.coverUrl,
				title: playlist.name
			};
		});

		return (
			<div className="add-song-playlist-form-main">
				<div className="add-song-playlist-form-inner">
					<div className="close-button" onClick={closeModal}>
						<i className="fas fa-times" />
					</div>
					<div className="header">Add to playlist</div>

					{addedMessage}
					{/* {this.renderErrors()} */}
					<div className="add-to-playlist-collection">
						<Collection collectionItemInfos={playlists} />
					</div>
				</div>
			</div>
		);
	}
}

export default AddToPlaylistForm;
