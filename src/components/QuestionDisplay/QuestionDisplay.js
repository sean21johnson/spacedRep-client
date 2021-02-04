import React, { Component } from 'react';
import UserContext from './../../contexts/UserContext';
import LanguageApiService from './../../services/language-api-service';
import QuestionDisplayForm from './../QuestionDisplayForm/QuestionDisplayForm';


class QuestionDisplay extends Component {

    static contextType = UserContext;

    componentDidMount() {
        this.context.clearError()

        LanguageApiService.getWords()
        .then(this.context.setWords)
        .catch(this.context.setError);
    }
    
    render() { 
        let language = this.context.words.language
        ? this.context.words.language.name : 'Language';

        let theScore = this.context.answer.totalScore
        ? this.context.answer.totalScore
        : this.context.head.totalScore
        ? this.context.head.totalScore
        : 0;

        let nextWordUp = this.context.answer.nextWord
        ? this.context.answer.nextWord
        : this.context.head.nextWord
        ? this.context.head.nextWord
        : 'Next Word';

        let theHead = this.context.head
        ? this.context.head : {};

        return ( 
            <>
                <div className="question_group"> 
                    <div className="question_item">
                        <h2>Translate the word:</h2>
                    <span className="translation_word">{nextWordUp}</span>
                    </div>
                    <div className="question_item">
                        <p>Your total score is: {theScore}</p>
                    </div>
                </div>
                <div className="translation_group">
                    <br/>
                    <span>You have answered this word correctly {theHead.wordCorrectCount} times.</span>
                    <span>You have answered this word incorrectly {theHead.wordIncorrectCount} times.</span>
                </div>
                <QuestionDisplayForm onAnswer={this.props.onAnswer}/>
            </>
         );
    }
}
 
export default QuestionDisplay;