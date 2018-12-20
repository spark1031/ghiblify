import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
	<Route
		path={path}
		exact={exact}
		render={props =>
			!loggedIn ? <Component {...props} /> : <Redirect to="/browse/playlists" />
		}
	/>
);
const Protected = ({ component: Component, path, loggedIn, exact }) => (
	<Route
		path={path}
		exact={exact}
		render={props =>
			loggedIn ? <Component {...props} /> : <Redirect to="/" />
		}
	/>
);

const mapStateToProps = state => {
	return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
	connect(
		mapStateToProps,
		null
	)(Auth)
);

export const ProtectedRoute = withRouter(
	connect(
		mapStateToProps,
		null
	)(Protected)
);

export const AutoRedirect = ({
	component: Component,
	path,
	loggedIn,
	exact
}) => (
	<Route
		path={path}
		exact={exact}
		render={props =>
			loggedIn ? <Redirect to="/browse" /> : <Component {...props} />
		}
	/>
);

// export const AuthRoute = connect(
// 	mapStateToProps,
// 	null,
// 	null,
// 	{ pure: false }
// )(Auth);

// export const ProtectedRoute = connect(
// 	mapStateToProps,
// 	null,
// 	null,
// 	{ pure: false }
// )(Protected);
