import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FeaturedContainer from "./featured/featured_container";
import TempFeaturedContainer from "./featured/temp_featured_container";
import SplashContainer from "./session/splash";

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/" component={SplashContainer} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
			<ProtectedRoute
				exact
				path="/browse/featured"
				component={TempFeaturedContainer}
			/>
			<Redirect to="/browse/featured" />
			<Redirect to="/" />
		</Switch>
	</div>
);

export default App;
