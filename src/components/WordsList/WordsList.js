import React, { Component } from 'react';
import './WordsList.css'
import UserContext from '../../contexts/UserContext';

class WordsList extends Component {

	static contextType = UserContext

	renderWords(words = []) {
		return words.map((word, index) => {
			return (
				<li key={index}>
					<h4>{word.original}</h4>
					<p className="correct_paragraph">correct answer count: {word.correct_count}</p>
					<p className="incorrect_paragraph">incorrect answer count: {word.incorrect_count}</p>
				</li>
			)
		})
	}

    render() {

		let { words } = this.context

		return (
				<div className="dashboard_contents_div">
					<ul>
						{this.renderWords(words.words)}
					</ul>
				</div>
		);
	}
}
 
export default WordsList;