import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// ReactDOM.render(<App />, document.getElementById('root'));

const render = (Component) =>
  ReactDOM.render(<Component />, document.getElementById('root'));
// 更改內容不用重整
render(hot(App));
