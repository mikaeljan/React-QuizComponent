import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incorrectAnswer: false
    };
  }
  handleClick(button_text) {
    console.log('Calling HandleClick method');
    if (button_text === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
      console.log(this.state.incorrectAnswer);
    } else {
      this.setState({ incorrectAnswer: true });
      console.log(this.state.incorrectAnswer);
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <QuizQuestionButton
                  clickHandler={this.handleClick.bind(this)}
                  key={index}
                  button_text={answer_option}
                />
              )
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
