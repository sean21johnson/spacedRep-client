import React, { Component } from 'react';
import { Input, Label } from '../Form/Form'
import UserContext from './../../contexts/UserContext';
import LanguageApiService from './../../services/language-api-service';
import Button from './../Button/Button';

class QuestionDisplayForm extends Component {
    static defaultProps = {
        onAnswer: () => {}
    }
    
    static contextType = UserContext;
    
    state = { error: null }

    initialInput = React.createRef()

    handleSubmitGuess = event => {
        console.log('handleSubmitGuess triggered')
        event.preventDefault()
        const { guess } = event.target
        this.context.setCurrentGuess(guess.value)
        this.setState({
            error: null
        })

        LanguageApiService.postGuess(guess.value)
        .then(response => {
            guess.value = ''
            this.context.setAnswer(response)
        })
        .then(() => this.props.onAnswer())
        .catch(response => {
            this.setState({ error: response.error })
        })
    }

    componentDidMount() {
        this.initialInput.current.focus()
    }

    render() { 
        return ( 
            <form className="question_form" onSubmit={this.handleSubmitGuess}>
            <div className="error_display">
                    {this.state.error && <p>{this.state.error}</p>}
                </div>
                <div>
                    <Label htmlFor="learn-guess-input">
                    What's the translation for this word?
                    </Label>
                    <Input
                        ref={this.initialInput}
                        id="learn-guess-input"
                        name="guess"
                        required/>
                </div>
                <Button type="submit">
                    Submit your answer
                </Button>
            </form>
         );
    }
}
 
export default QuestionDisplayForm;