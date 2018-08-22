import React from 'react';

import Api from './Api';
import QuestionSummaryList from './QuestionSummaryList';

export default class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  async componentDidMount() {
    const questions = await Api.getQuestions();
    this.setState({ questions });
  }

  render() {
    return <QuestionSummaryList questions={this.state.questions} />;
  }
}
