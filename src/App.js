import React from 'react';
import './scss/App.scss';
import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import DoneList from './components/DoneList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Help from './views/Help';
import NotFound from './views/NotFound';
import NewsContainer from './components/NewsContainer';

function App() {
  return (
    <BrowserRouter basename="/SPA-todo-app">
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <div className="ContentContainer">
              <div className="Todos">
                <TodoList />
                <DoneList />
              </div>
              <div className="News">
                <NewsContainer />
              </div>
            </div>
          I</Route>
          <Route path='/help'>
            <Help />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
};

export default App;
