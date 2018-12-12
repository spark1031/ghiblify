import React from "react";
import * as _ from "lodash";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		let formState = {};
		this.props.fields.forEach(field => (formState[field] = ""));
		this.state = formState;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.refreshErrors = this.refreshErrors.bind(this);
	}

	handleSubmit() {
		return e => {
			e.preventDefault();
			const user = Object.assign({}, this.state);
			this.props.processForm(user);
		};
	}

	handleClick() {
		return e => {
			e.preventDefault();
			this.props.login({ username: "sparky", password: "password" });
		};
	}

	update(field) {
		return e => {
			this.setState({
				[field]: e.target.value
			});
		};
	}

	renderErrors() {
		if (this.props.errors.length === 0) {
			return <div />;
		} else {
			let errors = this.props.errors.map((error, i) => (
				<div key={i}>{error}</div>
			));
			return <div className="session-form-errors">{errors}</div>;
		}
	}

	refreshErrors(e) {
		this.props.clearErrors();
	}

	signupButton() {
		return (
			<div className="signup-section">
				<div className="signup-section-header">Don't have an account?</div>
				<Link to="/signup" style={{ textDecoration: "none" }}>
					<div onClick={this.refreshErrors} className="signup-section-button">
						SIGN UP FOR GHIBLIFY
					</div>
				</Link>
			</div>
		);
	}

	loginLink() {
		return (
			<div className="login-section">
				<div className="login-section-header">Already have an account?</div>
				<Link style={{ textDecoration: "none" }} to="/login">
					<div onClick={this.refreshErrors} className="login-section-link">
						Log in
					</div>
				</Link>
			</div>
		);
	}

	render() {
		let formTagline;
		this.props.formType === "LOG IN"
			? (formTagline = "To visit 'My Neighbor Totoro', log in.")
			: (formTagline = "Sign up to get 'Spirited Away'.");
		let inputs = this.props.fields.map((field, i) => {
			let inputType;
			field === "password" ? (inputType = "password") : (inputType = "text");
			return (
				<div key={i} className="session-input">
					<input
						placeholder={_.startCase(field)}
						type={inputType}
						value={this.state[field]}
						onChange={this.update(field)}
					/>
				</div>
			);
		});

		let oppositeFormLink;
		this.props.formType === "LOG IN"
			? (oppositeFormLink = this.signupButton())
			: (oppositeFormLink = this.loginLink());

		let demoUserButton;
		this.props.formType === "LOG IN"
			? (demoUserButton = (
					<div className="session-demo">
						<div className="session-demo-button" onClick={this.handleClick()}>
							DEMO USER
						</div>
						<div className="or-divider">OR</div>
					</div>
			  ))
			: (demoUserButton = null);

		return (
			<div className="session-main">
				<div className="session-nav">
					<Link to="/" style={{ textDecoration: "none" }}>
						<div className="black-logo">
							<i className="fab fa-spotify" />
							<div className="black-logo-name">Ghiblify</div>
						</div>
					</Link>
				</div>

				<form onSubmit={this.handleSubmit()} className="session-form">
					<div className="session-tagline">{formTagline}</div>
					<div>{demoUserButton}</div>
					{this.renderErrors()}
					{inputs}
					<input
						className="session-button"
						type="submit"
						value={this.props.formType}
					/>
				</form>
				{oppositeFormLink}
			</div>
		);
	}
}
export default SessionForm;
