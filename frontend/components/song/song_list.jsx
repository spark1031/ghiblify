import React from "react";
import SongListItem from "./song_list_item";

class SongList extends React.Component {
	render() {
		const {
			typeObject, //playlist or album Object, non-hydrated, for SongListItem
			type,
			songsArr,
			addSongToPlaylist,
			removeSongFromPlaylist,
			openModal,
			currentUserId,
			isPlaying, //is the collection playing
			currentSongIndex
		} = this.props;

		if (songsArr) {
			let songs = songsArr.map((song, i) => (
				<SongListItem
					key={i}
					song={song}
					removeSongFromPlaylist={removeSongFromPlaylist}
					openModal={openModal}
					typeObject={typeObject}
					type={type}
					currentUserId={currentUserId}
					togglePlaying={() => {
						this.props.togglePlaying(song, i, type, typeObject, songsArr);
					}}
					isPlaying={isPlaying && i === currentSongIndex}
				/>
			));
			return <div className="song-list">{songs}</div>;
		} else {
			return null;
		}
	}
}

export default SongList;

// this song, at this index, for this album/playlist/songindexlist

// this.props.togglePlaying = (song, index, type, typeObject, songsArr) => {

// }
