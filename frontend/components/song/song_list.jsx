import React from "react";
import SongListItem from "./song_list_item";

class SongList extends React.Component {
	render() {
		const {
			songsArr,
			addSongToPlaylist,
			removeSongFromPlaylist,
			openModal
		} = this.props;
		let songs = songsArr.map((song, i) => (
			<SongListItem
				key={i}
				song={song}
				removeSongFromPlaylist={removeSongFromPlaylist}
				openModal={openModal}
			/>
		));
		return <div className="song-list">{songs}</div>;
	}
}

export default SongList;
