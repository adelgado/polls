import React from 'react';

export default props => (
  <div className={(props.className || '') + ' QuestionDetail '}>
    <h1>Question’s Details</h1>
    <h2>Question: {props.question.question}</h2>
    <ul>
      {props.question.choices.map(
        item => (console.log(item), <li key={item.choice}>{item.choice}</li>)
      )}
    </ul>
  </div>
);
