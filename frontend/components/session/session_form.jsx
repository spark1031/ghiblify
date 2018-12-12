import React from "react";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);

		let formState = {};
		this.props.fields.forEach(field => (formState[field] = ""));
		this.state = formState;

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		return e => {
			e.preventDefault();
			const user = Object.assign({}, this.state);
			this.props.processForm(user);
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
		return (
			<div className="session-form-errors">
				{this.props.errors.map(error => error)}
			</div>
		);
	}

	render() {
		let inputs = this.props.fields.map((field, i) => {
			let inputType;
			field === "password" ? (inputType = "password") : (inputType = "text");
			return (
				<div key={i}>
					{field}:
					<input
						placeholder={field}
						type={inputType}
						value={this.state[field]}
						onChange={this.update(field)}
					/>
				</div>
			);
		});
		return (
			<div>
				<form onSubmit={this.handleSubmit()}>
					{this.renderErrors()}
					{inputs}
					<input type="submit" value={this.props.formType} />
				</form>
			</div>
		);
	}
}
export default SessionForm;

// 	update(field) {
// 		return e =>
// 			this.setState({
// 				[field]: e.currentTarget.value
// 			});
// 	}

// 	renderErrors() {
// 		return (
// 			<ul>
// 				{this.props.errors.map((error, i) => (
// 					<li key={`error-${i}`}>{error}</li>
// 				))}
// 			</ul>
// 		);
// 	}

// 	render() {
// 		return (
// 			<div className="login-form-container">
// 				<form onSubmit={this.handleSubmit} className="login-form-box">
// 					Welcome to BenchBnB!
// 					<br />
// 					Please {this.props.formType} or {this.props.navLink}
// 					{this.renderErrors()}
// 					<div className="login-form">
// 						<br />
// 						<label>
// 							Username:
// 							<input
// 								type="text"
// 								value={this.state.username}
// 								onChange={this.update("username")}
// 								className="login-input"
// 							/>
// 						</label>
// 						<br />
// 						<label>
// 							Password:
// 							<input
// 								type="password"
// 								value={this.state.password}
// 								onChange={this.update("password")}
// 								className="login-input"
// 							/>
// 						</label>
// 						<br />
// 						<input
// 							className="session-submit"
// 							type="submit"
// 							value={this.props.formType}
// 						/>
// 					</div>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// export default SessionForm;
