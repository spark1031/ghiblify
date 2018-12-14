import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import SplashContainer from "./session/splash";
import MainPage from "./main_page";

// import TempFeaturedContainer from "./featured/temp_featured_container";

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/" component={SplashContainer} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<ProtectedRoute path="/browse/featured" component={MainPage} />
			<Redirect to="/" />
			<Redirect to="/browse/featured" />
		</Switch>
	</div>
);

export default App;

{
	/* <ProtectedRoute
	exact
	path="/browse/featured"
	component={TempFeaturedContainer}
/> */
}
