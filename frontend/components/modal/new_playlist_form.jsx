import React from "react";

class NewPlaylistForm extends React.Component {
	render() {
		let { action, closeModal } = this.props;
		return (
			<div className="new-playlist-form-main">
				<button onClick={closeModal}>x</button>
			</div>
		);
	}
}

export default NewPlaylistForm;
