import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBLZ6IHq05XC8sGjOVRm1fsCjGDsfmryDo',
      authDomain: 'manager-8ffd3.firebaseapp.com',
      databaseURL: 'https://manager-8ffd3.firebaseio.com',
      projectId: 'manager-8ffd3',
      storageBucket: 'manager-8ffd3.appspot.com',
      messagingSenderId: '749652580334'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
