import React, { Component } from 'react';
import Todo from './components/Todo'
import Header from './components/Header'
import './style/app.css'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';




class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware()))}>
          <div className="App">
            <Header />
            <Todo />
          </div>
      </Provider>
    );
  }
}

export default App;
