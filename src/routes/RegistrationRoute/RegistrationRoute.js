import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import AuthApiService from './../../services/auth-api-service';
import UserContext from './../../contexts/UserContext';

class RegistrationRoute extends Component {
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	static contextType = UserContext;

	//WORKED ORIGINALLY
	handleRegistrationSuccess = (username, password) => {
		AuthApiService.postLogin({
			username,
			password,
		})
			.then((res) => {
				this.context.processLogin(res.authToken);
				this.context.handleLoginSuccess(this.props.history, this.props.location);
			})
			.catch((res) => {
				this.setState({ error: res.error });
			});
	};


	render() {
		return (
			<section>
				<p className="paragraph_practice">
					Practice learning a language with the spaced repetition revision
					technique.
				</p>
				<h2 className="h2_signup">Sign up</h2>
				<RegistrationForm
					onRegistrationSuccess={this.handleRegistrationSuccess}
				/>
			</section>
		);
	}
}

export default RegistrationRoute;
