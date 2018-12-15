import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import NewPlaylistFormContainer from "./new_playlist_form_container";

function Modal({ modal, closeModal }) {
	if (!modal) {
		return null;
	}
	let component;
	switch (modal) {
		case "newPlaylist":
			component = <NewPlaylistFormContainer closeModal={closeModal} />;
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
	return {
		modal: state.ui.modal
	};
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
