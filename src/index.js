import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { throttle } from 'lodash';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers';

// Get data from localStorage
const loadState = () => {
    try {
        const items = JSON.parse(localStorage.getItem('todo-app-items'));
        if (items === null) return undefined;
        return items;
    } catch (err) {
        return undefined;
    }
}

// Write data to localStorage
const saveState = state => {
    try {
        localStorage.setItem('todo-app-items', JSON.stringify(state));
    } catch (err) {
        console.log(err);
    }
}

const store = createStore(reducers, { todos: loadState() }, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// We can subscribe to state which triggers a callback every time state changes
// To make sure we don't write too often, we limit function calls to 1 per second with the help of lodash
store.subscribe(
    throttle(
    () => {
    const todosState = store.getState().todos;    
    saveState(todosState)
}), 1000);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
