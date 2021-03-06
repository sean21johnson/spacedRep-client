import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
	static contextType = UserContext;

	handleLogoutClick = () => {
		this.context.processLogout();
	};

	renderLogoutLink() {
		return (
			<div>
				<nav>
					<span className="loggedin_user">
						Welcome, {this.context.user.name}
					</span>
					<Link
						className="login_item"
						onClick={this.handleLogoutClick}
						to="/login"
					>
						Logout
					</Link>
				</nav>
			</div>
		);
	}

	renderLoginLink() {
		return (
			<nav>
				<Link className="login_login login_item" to="/login">
					Login
				</Link>{" "}
				<Link className="login_signup login_item" to="/register">
					Sign up
				</Link>
			</nav>
		);
	}

	render() {
		return (
			<header>
				<h1>
					<Link className="login_header" to="/">
						Spaced Repetition
					</Link>
				</h1>
				{TokenService.hasAuthToken()
					? this.renderLogoutLink()
					: this.renderLoginLink()}
			</header>
		);
	}
}

export default Header;
