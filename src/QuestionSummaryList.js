import React from 'react';
import QuestionSummary from './QuestionSummary';

import './QuestionSummaryList.css';

export default props =>
  props.questions.length > 0 ? (
    <ul className="QuestionSummaryList">
      {props.questions.map(question => (
        <li key={question.url}>
          <QuestionSummary
            className="QuestionSummaryList__item"
            question={question}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no questions to be dislayed</p>
  );
