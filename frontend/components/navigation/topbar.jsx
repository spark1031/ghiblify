import React from "react";
import CategorySelector from "./category_selector";

// import Button from '../_button/_button';

const Topbar = props => {
	let { categoryItemInfos, button } = props;
	let playlistButton;
	if (props.button) {
		playlistButton = "new playlist";
		// playlistButton = <NewPlaylistButtonContainer />;
	}
	return (
		<div className="topbar-main">
			<div className="topbar-inner">
				<CategorySelector categoryItemInfos={categoryItemInfos} />
				<div className="topbar-button">{playlistButton}</div>
			</div>
		</div>
	);
};

export default Topbar;
