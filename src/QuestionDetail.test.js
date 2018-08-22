import React from 'react';
import ReactDOM from 'react-dom';
import QuestionDetail from './QuestionDetail';

const question = {
  choices: [
    {
      url: '/questions/9890/choices/37162',
      votes: 0,
      choice: 'Lageli hai bhidu'
    },
    { url: '/questions/9890/choices/37161', votes: 0, choice: 'Zhakaas' }
  ],
  published_at: '2018-08-22T21:37:58.758273+00:00',
  question: 'Number 10: Bantai kya swaal hai',
  url: '/questions/9890'
};

it('displays question title', () => {
  const div = document.createElement('div');

  ReactDOM.render(<QuestionDetail question={question} />, div);

  expect(div.textContent).toMatch(/Number 10/);

  ReactDOM.unmountComponentAtNode(div);
});

it('displays question choices', () => {
  const div = document.createElement('div');

  ReactDOM.render(<QuestionDetail question={question} />, div);

  expect(div.textContent).toMatch(/Lageli hai/);

  ReactDOM.unmountComponentAtNode(div);
});
