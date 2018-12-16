import React from "react";
import CategorySelector from "./category_selector";

// import Button from '../_button/_button';

class Topbar extends React.Component {
	handleClick() {
		return e => {
			this.props.buttonAction("newPlaylist");
		};
	}

	render() {
		let { categoryItemInfos, buttonText } = this.props;
		let playlistButton = null;
		if (buttonText) {
			playlistButton = (
				<div className="topbar-button-wrapper">
					<div className="topbar-button" onClick={this.handleClick()}>
						{buttonText}
					</div>
				</div>
			);
		}
		return (
			<div className="topbar-main">
				<div className="topbar-inner">
					<CategorySelector categoryItemInfos={categoryItemInfos} />
					{playlistButton}
				</div>
			</div>
		);
	}
}

export default Topbar;
