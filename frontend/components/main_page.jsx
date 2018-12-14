import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Sidebar from "./navigation/sidebar";
import Player from "./player/player";
import Browse from "./browse/browse";
import Library from "./library/library";
import Search from "./search/search";

// components to import:
//  Sidebar
//  Browse
//  Library

const MainPage = () => {
	const sidebarItemInfos = [
		{
			to: "/search",
			iconClassName: "fas fa-search",
			displayText: "search"
		},
		{
			to: "/browse",
			iconClassName: "fas fa-home",
			displayText: "home"
		},
		{
			to: "/library",
			iconClassName: "fas fa-headphones",
			displayText: "library"
		}
	];
	return (
		<div>
			<div className="main-nav-content">
				<Sidebar sidebarItemInfos={sidebarItemInfos} />
				<Switch>
					<Route path="/browse" component={Browse} />
					<Route path="/library" component={Library} />
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
