import React from "react";

class NewPlaylistButton extends React.Component {
	handleClick() {
		return () => {
			let { modalIsOpen, closeModal, openModal } = this.props;

			if (modalIsOpen) {
				closeModal();
				openModal();
			} else {
				openModal();
			}
		};
	}

	render() {
		const buttonClass = "_button-long";
		const buttonTextClass = "_button-text";
		const buttonType = "NEW PLAYLIST";
		return (
			<div className={buttonClass} onClick={this.handleClick()}>
				<div className={buttonTextClass}>{buttonType}</div>
			</div>
		);
	}
}

export default NewPlaylistButton;
