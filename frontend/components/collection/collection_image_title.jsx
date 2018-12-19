import React from "react";
import { Link } from "react-router-dom";
import PlayButtonOverlay from "./play_button_overlay";

class CollectionImageTitle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false
		};
	}

	toggleHover(isHovering) {
		return () => {
			this.setState({ isHovering });
		};
	}

	render() {
		let {
			primaryTo,
			imageUrl,
			title,
			circular, //needed for artists
			onClick, //coming for add to playlist form
			overlayIcon, //coming from add to playlist form?
			onPlayButtonClick, //coming from Playlist/AlbumDetailsContainers OR Playlist/AlbumContainers
			selfIsPlaying
		} = this.props;

		let imageClass;
		circular ? (imageClass = "image-circular") : (imageClass = "image");
		const overlay = this.state.isHovering ? (
			<PlayButtonOverlay
				overlayIcon={overlayIcon}
				onClick={onPlayButtonClick}
				selfIsPlaying={selfIsPlaying}
			/>
		) : null;

		let imageElement = (
			<div className={imageClass}>
				<img src={imageUrl} />
				{overlay}
			</div>
		);
		let titleElement = <div>{title}</div>;

		if (primaryTo !== undefined) {
			imageElement = (
				<Link to={primaryTo} style={{ textDecoration: "none" }}>
					{imageElement}
				</Link>
			);
			titleElement = (
				<Link
					className="title"
					to={primaryTo}
					style={{ textDecoration: "none" }}
				>
					{titleElement}
				</Link>
			);
		}

		if (onClick) {
			imageElement = (
				<div className={imageClass} onClick={onClick}>
					<img src={imageUrl} />
					{overlay}
				</div>
			);
		}

		return (
			<div
				className="collection-image-title"
				onMouseEnter={this.toggleHover(true)}
				onMouseLeave={this.toggleHover(false)}
			>
				{imageElement}
				{titleElement}
			</div>
		);
	}
}

export default CollectionImageTitle;
