import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
