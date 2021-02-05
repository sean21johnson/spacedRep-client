import React, { Component } from "react";
import UserContext from "./../../contexts/UserContext";
import LanguageApiService from "./../../services/language-api-service";
import QuestionDisplay from "./../../components/QuestionDisplay/QuestionDisplay";
import AnswerDisplay from "./../../components/AnswerDisplay/AnswerDisplay";

class LearningRoute extends Component {
	static contextType = UserContext;

	state = { answer: false };

	componentDidMount() {
		this.context.clearError();
		LanguageApiService.getHead()
			.then(this.context.setHead)
			.catch(this.context.setError);
	}

	onAnswer = (resp) => {
		this.context.setNewWord(resp);
		this.setState({
			answer: true,
		});
	};

	onNextUp = () => {
		LanguageApiService.getHead()
			.then(this.context.setHead)
			.then(() =>
				this.setState({
					answer: false,
				})
			)
			.catch(this.context.setError);
	};

	render() {
		let currentView = !this.state.answer ? (
			<QuestionDisplay onAnswer={this.onAnswer} />
		) : (
			<AnswerDisplay onNextUp={this.onNextUp} />
		);

		return (
			<section className="learning_section">
				<div>{currentView}</div>
			</section>
		);
	}
}

export default LearningRoute;
