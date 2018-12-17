import React from "react";
import CloseModalIcon from "./close_icon"; //doesn't show up? something wrong w SVG?

class NewPlaylistForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			creator_id: this.props.currentUserId
		};

		this.renderErrors = this.renderErrors.bind(this);
	}

	//INPUT: playlist name
	handleInput() {
		return e => {
			this.refreshErrors();
			this.setState({ name: e.target.value });
		};
	}

	//CREATE PLAYLIST BUTTON
	handleSubmit() {
		return e => {
			e.preventDefault();
			this.props.createPlaylist(this.state, this.props.history);
			if (this.state.name.length > 0) {
				this.props.closeModal();
			}
		};
	}

	//if user presses "ENTER" on keyboard to SUBMIT
	handleEnter() {
		return e => {
			if (e.key === "Enter") this.handleSubmit(e);
		};
	}

	handleCancel() {
		return e => {
			this.setState({ name: "" });
			this.props.closeModal();
		};
	}

	renderErrors() {
		if (this.props.errors.length === 0) {
			return <div />;
		} else {
			let errors = this.props.errors.map((error, i) => (
				<div key={i}>{error}</div>
			));
			return <div className="session-form-errors">{errors}</div>;
		}
	}

	refreshErrors(e) {
		this.props.clearErrors();
	}

	render() {
		let { action, closeModal } = this.props;
		return (
			<div className="new-playlist-form-main">
				<div className="new-playlist-form-inner">
					<div className="close-button" onClick={closeModal}>
						<i className="fas fa-times" />
					</div>
					<div className="header">Create new playlist</div>
					{this.renderErrors()}
					<form className="form" onSubmit={this.handleSubmit()}>
						<div className="input-section">
							<div className="form-tagline">Playlist Name</div>
							<input
								className="input"
								type="text"
								placeholder="Start typing..."
								autoComplete="off"
								value={this.state.name}
								onChange={this.handleInput()}
								onKeyDown={this.handleEnter()}
							/>
						</div>
						<div className="form-buttons-wrapper">
							<div className="form-buttons">
								<button
									className="new-playlist-cancel"
									onClick={this.handleCancel()}
								>
									CANCEL
								</button>
								<input className="create-button" type="submit" value="CREATE" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default NewPlaylistForm;
