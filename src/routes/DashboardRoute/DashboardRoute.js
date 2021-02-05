import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "./../../contexts/UserContext";
import LanguageApiService from "./../../services/language-api-service";
import WordsList from "../../components/WordsList/WordsList";

class DashboardRoute extends Component {
	static contextType = UserContext;

	componentDidMount() {
		this.context.clearError();

		LanguageApiService.getWords()
			.then(this.context.setWords)
			.catch(this.context.setError);
	}

	render() {
		let language = this.context.words.language
			? this.context.words.language.name
			: "Language";
		let score = this.context.words.language
			? this.context.words.language.total_score
			: 0;

		return (
			<section>
				<div>
					<h2 className="language_header">{language}</h2>
				</div>
				<div className="total_correct_div">
					<p className="total_correct">Total correct answers: {score}</p>
				</div>
				<div>
					<h3 className="practice_words">Words to practice</h3>
				</div>
				<div className="dashboard_contents_div">
					<WordsList />
					<div className="start_practicing_div">
						<Link to="/learn">
							<button className="start_practicing_button">
								Start practicing
							</button>
						</Link>
					</div>
				</div>
			</section>
		);
	}
}

export default DashboardRoute;
