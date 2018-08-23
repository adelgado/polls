import React from 'react';

import './QuestionDetail.css';

export default props => (
  <div className={(props.className || '') + ' QuestionDetail '}>
    <h1>Question’s Details</h1>
    <h2>Question: {props.question.question}</h2>
    <ul className="QuestionDetail__choices">
      {props.question.choices.map(item => (
        <li className="QuestionDetail__choice" key={item.choice}>
          <div>{item.choice}</div>
          <div>{item.votes} votes</div>
          {props.totalVotes > 0 && (
            <div>{Math.round((item.votes / props.totalVotes) * 100)} %</div>
          )}
        </li>
      ))}
    </ul>
  </div>
);
