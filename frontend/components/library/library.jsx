import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Topbar from "../navigation/topbar";
import AlbumsContainer from "../album/albums_container";
import PlaylistsContainer from "../playlist/playlist_container";
import ArtistsContainer from "../artist/artists_container";
import SongsContainer from "../song/songs_container";
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
		const buttonText = "NEW PLAYLIST";
		const buttonAction = this.props.openModal;
		return (
			<div className="library">
				<div style={{ overflow: "auto", height: "100%", width: "100%" }}>
					<Topbar
						categoryItemInfos={categoryItemInfos}
						buttonText={buttonText}
						buttonAction={buttonAction}
					/>

					<Switch>
						<Route
							path="/library/albums"
							render={routeProps => (
								<AlbumsContainer {...routeProps} type="saved" />
							)}
						/>
						<Route
							path="/library/playlists"
							render={routeProps => (
								<PlaylistsContainer {...routeProps} type="saved" />
							)}
						/>

						<Route
							path="/library/artists"
							render={routeProps => (
								<ArtistsContainer {...routeProps} type="saved" />
							)}
						/>
						<Route
							path="/library/songs"
							render={routeProps => (
								<div className="songs-container-wrapper">
									<SongsContainer {...routeProps} type="saved" />
								</div>
							)}
						/>
						<Redirect to="/library/playlists" />
					</Switch>
				</div>
			</div>
		);
	}
}

export default Library;
