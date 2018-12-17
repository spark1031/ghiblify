import { connect } from "react-redux";
import NewPlaylistButton from "./new_playlist_button";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
	return {
		modalIsOpen: state.ui.modal
	};
};

const mapDispatchToProps = dispatch => {
	return {
		closeModal: () => dispatch(closeModal()),
		openModal: () => dispatch(openModal("newPlaylist"))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewPlaylistButton);
