import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";

const mapDispatchToProps = dispatch => {
	return {
		login: user => dispatch(login(user))
	};
};

class Splash extends React.Component {
	handleClick() {
		return e => {
			e.preventDefault();
			this.props.login({ username: "sparky", password: "password" });
		};
	}
	render() {
		return (
			<div className="splash-main">
				<div className="splash-nav">
					<Link to="/" style={{ textDecoration: "none" }}>
						<div className="white-logo">
							<i className="fab fa-spotify" />
							<div className="white-logo-name">Ghiblify</div>
						</div>
					</Link>

					<div className="splash-nav-links-container">
						<div className="splash-nav-links">
							<a href="https://github.com/spark1031">
								<div className="github-logo">
									<i className="fab fa-github-square" />
								</div>
							</a>

							<a href="https://www.linkedin.com/in/sujin-p-ba7b2511b/">
								<div className="linkedin-logo">
									<i className="fab fa-linkedin" />
								</div>
							</a>

							<div className="session-links">
								<Link to="/signup" style={{ textDecoration: "none" }}>
									<div className="signup-link">Sign Up</div>
								</Link>

								<Link to="/login" style={{ textDecoration: "none" }}>
									<div className="login-link">Login</div>
								</Link>

								<div onClick={this.handleClick()} className="demo-link">
									<a href="">Demo</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="splash-banner-container">
					<div className="splash-banner">
						<div className="splash-banner-header">Music for Ghibli fans.</div>

						<div className="splash-banner-subheader">
							Hundreds of songs. No credit card needed.
						</div>

						<Link to="/signup" style={{ textDecoration: "none" }}>
							<div className="splash-banner-button">GET GHIBLIFY FREE</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	null,
	mapDispatchToProps
)(Splash);
