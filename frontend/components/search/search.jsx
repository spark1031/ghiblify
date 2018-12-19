import React from "react";
import { Route, Switch } from "react-router-dom";
// import { AuthRoute, ProtectedRoute } from "../../util/route_util";

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: ""
		};

		this.renderResults = this.renderResults.bind(this);
	}

	componentDidMount() {
		let { fetchAllSongs, fetchAllPlaylists } = this.props;
		fetchAllSongs();
		fetchAllPlaylists();
	}

	handleInput() {
		return e => {
			this.setState({ searchInput: e.target.value });
		};
	}

	renderNullResults() {
		return (
			<div className="no-search-results">
				<div className="header">Search Ghiblify</div>
				<div className="text">
					Find your favorite Studio Ghibli songs, artists, albums and playlists.
				</div>
			</div>
		);
	}

	renderResults() {
		return <div className="search-results">RESULT COLLECTIONS</div>;
	}

	render() {
		let results;
		this.state.searchInput.length === 0
			? (results = this.renderNullResults())
			: (results = this.renderResults());

		return (
			<div className="search">
				<div className="search-bar">
					<input
						className="search-input"
						type="text"
						placeholder="Start typing..."
						autoComplete="off"
						value={this.state.name}
						onChange={this.handleInput()}
					/>
				</div>
				{results}
			</div>
		);
	}
}

export default Search;
