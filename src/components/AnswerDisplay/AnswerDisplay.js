import React, { Component } from 'react';
import UserContext from './../../contexts/UserContext';
import Button from '../Button/Button';

class AnswerDisplay extends Component {
    static defaultProps = {
        onClick: () => {}
    }

    static contextType = UserContext;

    showCorrect(isCorrect) {
        let correctAnswer = isCorrect
        ? `You were correct! :D` : `Good try, but not quite right :(`

        return (
            <>
                <div className="item">
                    <h2 className="results_header">{correctAnswer}</h2>
                </div>
            </>
        )
    }

    showNext(correctAnswer) {
        console.log(this.context)
        let { answer } = this.context;
        let theWord = correctAnswer ? answer.nextWord : answer.answer;
        let paragraph = correctAnswer ? 'Next word: ' : `The correct translation for ${this.context.words.words[0].original} was ${theWord} and you chose ${this.context.currentGuess}`

        return <p className="DisplayScore">{paragraph}
            {/* <span className='translation_class'>{theWord || 'word'} was {correctAnswer}</span>  */}
        </p>
    }

    render() { 
        let { isCorrect = 'false', wordCorrectCount, wordIncorrectCount, answer, totalScore } = this.context.answer;

        return (
            <>  
            <div className="answer_group">
                {this.showCorrect(isCorrect)}
                <div className="answer_item">
                    <p className="answer_group_score">Your total score is: {totalScore}</p>
                    <p>Scores for {answer}</p>
                    <p>{wordCorrectCount} correct {' & '} {wordIncorrectCount} incorrect</p>
                </div>
            </div>
            <div className='answer_group_next_answer'>
                {this.showNext(isCorrect)}
            </div>

            <Button onClick={() => this.props.onNextUp()}>Try another word!</Button>
            </>    
        );
    }
}
 
export default AnswerDisplay;