import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskList from './component/TaskList';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import rootReducer from './reducers';

const store=createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TaskList/>
  </Provider>,
  document.getElementById('root')
);