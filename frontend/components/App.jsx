import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import FeaturedContainer from "./featured/featured_container";
import TempFeaturedContainer from "./featured/temp_featured_container";
import SplashContainer from "./session/splash";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/" component={SplashContainer} />
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignupFormContainer} />
		</Switch>
		<ProtectedRoute path="/browse/featured" component={TempFeaturedContainer} />
	</div>
);

export default App;
