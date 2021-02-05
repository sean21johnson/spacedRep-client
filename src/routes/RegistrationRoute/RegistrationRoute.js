import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

class RegistrationRoute extends Component {
	static defaultProps = {
		history: {
			push: () => {},
		},
	};

	handleRegistrationSuccess = () => {
		const { history } = this.props;
		history.push("/login");
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
