import React from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import SearchResultsContainer from "./search_results"; //has container attached in same file!!
// import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import { fetchSearchResults } from "../../actions/search_actions";

const WAIT_INTERVAL = 500;

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.triggerChange = this.triggerChange.bind(this);
	}

	componentWillMount() {
		this.timer = null;
	}

	handleChange(e) {
		clearTimeout(this.timer);
		this.setState({ query: e.target.value });
		this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
	}

	triggerChange() {
		const { query } = this.state;
		this.props
			.fetchSearchResults(query)
			.then(results =>
				query
					? this.props.history.push(`/search/results/${query}`)
					: this.props.history.push(`/search`)
			);
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
		return <Route path="/search/results" component={SearchResultsContainer} />;
	}

	render() {
		let results;

		this.state.query.length === 0
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
						value={this.state.query}
						onChange={this.handleChange}
					/>
				</div>
				{results}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchSearchResults: query => dispatch(fetchSearchResults(query))
});

export default withRouter(
	connect(
		null,
		mapDispatchToProps
	)(Search)
);
