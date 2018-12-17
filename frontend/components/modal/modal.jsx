import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import NewPlaylistFormContainer from "./new_playlist_form_container";
import AddToPlaylistFormContainer from "./add_to_playlist_form_container";

function Modal({ type, modalInfo, closeModal }) {
	if (!type) {
		return null;
	}
	let component;
	switch (type) {
		case "newPlaylist":
			component = <NewPlaylistFormContainer closeModal={closeModal} />;
			break;
		case "addToPlaylist":
			component = (
				<AddToPlaylistFormContainer
					closeModal={closeModal}
					songId={modalInfo.songId}
				/>
			);
			break;
		default:
			return null;
	}
	return (
		<div className="modal-child" onClick={e => e.stopPropagation()}>
			{component}
		</div>
	);
}

const mapStateToProps = state => {
	const modal = state.ui.modal;
	if (!modal) {
		return {
			type: null,
			modalInfo: null
		};
	} else {
		return {
			type: state.ui.modal.type,
			modalInfo: state.ui.modal.modalInfo
		};
	}
};

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(closeModal())
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Modal);
