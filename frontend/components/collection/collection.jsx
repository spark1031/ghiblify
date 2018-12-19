import React from "react";
import CollectionItem from "./collection_item";

// collectionItemInfos =  array of itemInfos
// itemInfos = {
// 	imageUrl: coverUrl,
// 	title: playlist.name,
// 	subTitle: playlist.creator.username,
// 	primaryTo: `/playlists/${playlist.id}`,
// 	secondaryTo: '/search',
// 	tracks: playlist.playlistSongs,
// 	selfIsPlaying,
// 	onPlayButtonClick: () => {
// 		updateCurrentPlayingPlaylist(playlist.playlistSongs, playlist);
// 	}

class Collection extends React.Component {
	render() {
		let { title, collectionItemInfos, songId } = this.props;
		let collectionTitle;
		if (title) {
			collectionTitle = <div className="title">{title}</div>;
		} else {
			collectionTitle = null;
		}

		let items = collectionItemInfos.map((itemInfo, i) => (
			<CollectionItem key={i} {...itemInfo} />
		));
		return (
			<div className="collection">
				{collectionTitle}
				<div className="collection-items-wrapper">
					<div className="item-grid">{items}</div>
				</div>
			</div>
		);
	}
}

export default Collection;
