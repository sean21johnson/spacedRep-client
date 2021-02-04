import React, { Component } from 'react'
import UserContext from './../../contexts/UserContext';
import LanguageApiService from './../../services/language-api-service';
import QuestionDisplay from './../../components/QuestionDisplay/QuestionDisplay';
import AnswerDisplay from './../../components/AnswerDisplay/AnswerDisplay';

/*
Need to show the below:
  subheading "Translate the word: " and the next word to translate
  form with input fields for: "What's the translation for this word?"
  A submit button "Submit your answer"
  A count of the number of times the user answered the current word correctly and incorrectly
    "You have answered this word correctly X times"
    "You have answered this word incorrectly X times"
  Total score displayed for how many times the user answered correctly:
    "Your total score is: X"
*/

/*
Need below for incorrect answer submission:
  Subtitle with "good try, but not quite right :("
  text with "the correct translation for {original} was {answer} and you chose {guess}"
  button with "try another word!"
  Total score displayed
*/

/*
Need below for correct answer submission:
  Subtitle with "You were correct! :D"
  text with "The correct translation for....(same as above)"
  Button with "try another word!"
  Total score displayed
*/

class LearningRoute extends Component {

  static contextType = UserContext

  state = { answer: false }

  componentDidMount() {
    console.log('learning route mounted')
    this.context.clearError()
    LanguageApiService.getHead()
    .then(this.context.setHead)
    .catch(this.context.setError)
  }

  onAnswer = () => {
    console.log('onAnswer was triggered')
    LanguageApiService.getHead()
    .then(this.context.setHead)
    .then(() => this.setState({
      answer: true
    }))
    .catch(this.context.setError);
  }

  onNextUp = () => {
    console.log('onNextUp was triggered')
    LanguageApiService.getHead()
    .then(this.context.setHead)
    .then(() => this.setState({
      answer: false
    }))
    .catch(this.context.setError)
  }

  render() {

    let currentView = !this.state.answer ?
    <QuestionDisplay onAnswer={this.onAnswer}/>
    :
    <AnswerDisplay onNextUp={this.onNextUp}/>

    return (
      <section className="learning_section">
        <div>
          {currentView}
        </div>
      </section>
    );
  }
}

export default LearningRoute
