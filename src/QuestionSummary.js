import React from 'react';
import moment from 'moment';

import './QuestionSummary.css';

export default props => (
  <div className={(props.className || '') + ' QuestionSummary '}>
    <h2 className="QuestionSummary__title">{props.question.question}</h2>
    <time
      className="QuestionSummary__publishedAt"
      dateTime={props.question.published_at}
    >
      {moment(props.question.published_at).fromNow()}
    </time>
    <p className="QuestionSummary__choices">
      {props.question.choices.length} choices
    </p>
  </div>
);
