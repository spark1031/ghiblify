import React from "react";
import { Route, Switch } from "react-router-dom";
import Topbar from "../navigation/topbar";
// import { AuthRoute, ProtectedRoute } from "../../util/route_util";

class Library extends React.Component {
	render() {
		const categoryItemInfos = [
			{
				to: "/library/playlists",
				displayText: "PLAYLISTS"
			},
			{
				to: "/library/songs",
				displayText: "SONGS"
			},
			{
				to: "/library/albums",
				displayText: "ALBUMS"
			},
			{
				to: "/library/artists",
				displayText: "ARTISTS"
			}
		];
		const button = true;
		return (
			<div className="library">
				<Topbar categoryItemInfos={categoryItemInfos} button={button} />
			</div>
		);
	}
}

export default Library;
