import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Sidebar from "./navigation/sidebar";

// components to import:
//  Sidebar
//  Browse
//  Library

const MainPage = () => {
	const sidebarItemInfos = [
		{
			to: "/browse",
			iconClassName: "fas fa-home",
			displayText: "browse"
		},
		{
			to: "/library",
			iconClassName: "fas fa-headphones",
			displayText: "library"
		},
		{
			to: "/search",
			iconClassName: "fas fa-search",
			displayText: "search"
		}
	];
	return (
		<div>
			<Sidebar sidebarItemInfos={sidebarItemInfos} />
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
