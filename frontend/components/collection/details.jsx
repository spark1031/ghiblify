import React from "react";
import CollectionItem from "./collection_item";
import Button from "../_button/_button";
import SongListContainer from "../song/song_list_container";
import DetailsImageTitle from "../collection//collection_image_title";
import PlayButtonOverlay from "../collection/play_button_overlay";

// props = {
// 	imageUrl:
// 	title:
// 	subTitle:
// 	songsArr:
// 	detailsText: "2014 • 19 SONGS" OR "19 SONGS"
// }

class Details extends React.Component {
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
	playSongs() {}

	render() {
		const {
			typeObject, //playlist or album object (not hydrated) -> threaded to song list item
			imageUrl,
			title,
			subTitle,
			songsArr,
			detailsText,
			type,
			history
		} = this.props;

		const overlay = this.state.isHovering ? <PlayButtonOverlay /> : null;

		let browseButton = null;
		let deleteButton = null;

		if (type === "playlist") {
			const redirectToSongs = () => history.push("/library/songs");
			browseButton = (
				<Button
					color="white"
					buttonType="FIND SONGS"
					action={redirectToSongs}
				/>
			);
			deleteButton = (
				<Button
					color="transparent"
					buttonType="DELETE"
					// action={this.props.deletePlaylist()}
					action={this.props.deletePlaylist}
				/>
			);
		}

		return (
			<div className="details-main">
				<div className="info">
					<div className="details-item">
						<div
							className="details-image-title"
							onMouseEnter={this.toggleHover(true)}
							onMouseLeave={this.toggleHover(false)}
						>
							<div className="image">
								<img src={imageUrl} />
								{overlay}
							</div>
							<div className="title">{title}</div>
						</div>
						<div className="sub-title">{subTitle}</div>
					</div>
					<Button buttonType="PLAY" action={this.playSongs} />
					<div className="year-songs">{detailsText}</div>
					<div className="extra-buttons">
						{browseButton}
						{deleteButton}
					</div>
				</div>

				<div className="songs">
					<SongListContainer
						songsArr={songsArr}
						typeObject={typeObject}
						type={type}
					/>
				</div>
			</div>
		);
	}
}

export default Details;
