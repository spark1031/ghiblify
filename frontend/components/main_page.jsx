import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Modal from "../components/modal/modal";
import Sidebar from "./navigation/sidebar";
import Player from "./player/player";
import Browse from "./browse/browse";
import LibraryContainer from "./library/library_container";
import Search from "./search/search";
import SearchIcon from "./navigation/search_icon";
import HomeIcon from "./navigation/home_icon";
import LibraryIcon from "./navigation/library_icon";

// components to import:
//  Sidebar
//  Browse
//  Library

const MainPage = () => {
	const sidebarItemInfos = [
		{
			to: "/search",
			icon: <SearchIcon />,
			displayText: "Search"
		},
		{
			to: "/browse",
			icon: <HomeIcon />,
			displayText: "Home"
		},
		{
			to: "/library",
			icon: <LibraryIcon />,
			displayText: "Your Library"
		}
	];
	return (
		<div>
			<div className="main-nav-content">
				<Modal />
				<Sidebar sidebarItemInfos={sidebarItemInfos} />
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route path="/library" component={LibraryContainer} />
					<Route path="/search" component={Search} />
				</Switch>
			</div>

			<Player />
		</div>
	);
};

export default MainPage;

{
	/* <Switch>
			<Route path="/browse" component={Browse} />
			<Route path="/library" component={Library} />
		</Switch> */
}
