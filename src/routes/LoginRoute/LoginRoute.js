import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import UserContext from './../../contexts/UserContext';

class LoginRoute extends Component {
	static defaultProps = {
		location: {},
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	render() {
		return (
			<section>
				<h2>Login</h2>
				<LoginForm onLoginSuccess={() => this.context.handleLoginSuccess(this.props.history, this.props.location)} />
			</section>
		);
	}
}

export default LoginRoute;
