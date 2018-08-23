import React from 'react';

import Api from './Api';
import QuestionSummaryList from './QuestionSummaryList';
import QuestionDetail from './QuestionDetail';

export default class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      currentView: '/questions'
    };

    this.navigateToQuestion = this.navigateToQuestion.bind(this);
  }

  async componentDidMount() {
    const questions = await Api.getQuestions();
    this.setState({ questions });
  }

  navigateToList() {
    this.setState({ currentView: '/questions' });
  }

  navigateToQuestion(questionUrl) {
    this.setState({ currentView: questionUrl });
  }

  render() {
    if (this.state.currentView === '/questions') {
      return (
        <QuestionSummaryList
          questions={this.state.questions}
          onSelect={this.navigateToQuestion}
        />
      );
    } else {
      const question = this.state.questions.find(
        question => question.url === this.state.currentView
      );

      const questionTotalVotes = question.choices.reduce(
        (memo, item) => memo + item.votes,
        0
      );

      return (
        <QuestionDetail question={question} totalVotes={questionTotalVotes} />
      );
    }
  }
}
