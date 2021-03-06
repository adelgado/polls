import React from 'react';
import QuestionSummary from './QuestionSummary';

import './QuestionSummaryList.css';

export default props =>
  props.questions.length > 0 ? (
    <ul className="QuestionSummaryList">
      {props.questions.map(question => (
        <li key={question.url}>
          <QuestionSummary
            onSelect={props.onSelect}
            className="QuestionSummaryList__item"
            question={question}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading...</p>
  );
