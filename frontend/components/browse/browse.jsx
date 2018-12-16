import React from "react";
import { Route, Switch } from "react-router-dom";

import Topbar from "../navigation/topbar";
import AlbumsContainer from "../album/albums_container";
// import { AuthRoute, ProtectedRoute } from "../../util/route_util";

class Browse extends React.Component {
	render() {
		const categoryItemInfos = [
			{
				to: "/browse/featured",
				displayText: "FEATURED"
			},
			{
				to: "/browse/playlists",
				displayText: "PLAYLISTS"
			},
			{
				to: "/browse/albums",
				displayText: "ALBUMS"
			},
			{
				to: "/browse/artists",
				displayText: "ARTISTS"
			}
		];
		return (
			<div className="browse">
				<Topbar
					categoryItemInfos={categoryItemInfos}
					// buttonText={buttonText}
					// buttonAction={buttonAction}
				/>
				<Switch>
					<Route
						path="/browse/albums"
						render={routeProps => (
							<AlbumsContainer {...routeProps} type="all" />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default Browse;
