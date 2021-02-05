import React, { Component } from "react";
import UserContext from "./../../contexts/UserContext";
import Button from "../Button/Button";

class AnswerDisplay extends Component {
	static defaultProps = {
		onClick: () => {},
	};

	static contextType = UserContext;

	showCorrect(isCorrect) {
		let correctAnswer = isCorrect
			? `You were correct! :D`
			: `Good try, but not quite right :(`;

		return (
			<>
				<div className="item">
					<h2 className="results_header">{correctAnswer}</h2>
				</div>
			</>
		);
	}

	showNext() {
		let { answer } = this.context;

		let paragraph = `The correct translation for ${this.context.lastWord.nextWord} was ${answer.answer} and you chose ${this.context.currentGuess}!`;

		return (
			<div className="DisplayFeedback">
				<p>{paragraph}</p>
			</div>
		);
	}

	render() {
		let { isCorrect = "false", totalScore } = this.context.answer;

		return (
			<>
				<div className="answer_group">{this.showCorrect(isCorrect)}</div>
				<div className="answer_group_next_answer">{this.showNext()}</div>
				<div className="answer_item DisplayScore">
					<p className="answer_display_total_score">
						Your total score is: {totalScore}
					</p>
				</div>
				<div className="another_word_button">
					<Button onClick={() => this.props.onNextUp()}>
						Try another word!
					</Button>
				</div>
			</>
		);
	}
}

export default AnswerDisplay;
