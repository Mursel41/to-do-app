import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import newsReducer from './newsReducer';

const reducers = combineReducers({ todos: todoReducer, news: newsReducer });

export default reducers;