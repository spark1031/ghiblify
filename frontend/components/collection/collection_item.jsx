import React from "react";
import { Link } from "react-router-dom";
import CollectionImageTitle from "./collection_image_title";

// itemInfos/props = {
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
class CollectionItem extends React.Component {
	render() {
		let {
			circular,
			primaryTo,
			secondaryTo,
			imageUrl,
			title,
			subTitle,
			onClick, //comes from add to playlist functionality ('+' icon)
			onPlayButtonClick,
			selfIsPlaying
		} = this.props;
		let optional;
		if (subTitle && secondaryTo) {
			optional = (
				<Link className="sub-title" to={secondaryTo}>
					<div>{subTitle}</div>
				</Link>
			);
		} else if (subTitle) {
			optional = <div>{subTitle}</div>;
		} else {
			optional = <div />;
		}

		//onClick only exists if the icon is "+" to add song to playlist
		if (onClick) {
			return (
				<div className="collection-item">
					<CollectionImageTitle
						onClick={onClick}
						imageUrl={imageUrl}
						title={title}
						circular={circular}
						overlayIcon={true}
					/>

					{optional}
				</div>
			);
		} else {
			return (
				<div className="collection-item">
					<CollectionImageTitle
						primaryTo={primaryTo}
						imageUrl={imageUrl}
						title={title}
						circular={circular}
						onPlayButtonClick={onPlayButtonClick}
						selfIsPlaying={selfIsPlaying}
					/>

					{optional}
				</div>
			);
		}
	}
}

export default CollectionItem;
