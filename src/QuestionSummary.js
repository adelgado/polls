import React from 'react';

export default props => (
  <div>
    {props.question.question}
    {props.question.published_at}
    {props.question.choices.length}
  </div>
);
