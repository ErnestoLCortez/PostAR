import React, { Component } from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './redux/reducers';
import Router from './navigation';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyB8RsM5NUFI_YQG9NXEhWntEZ8pMci-SmE',
      authDomain: 'terrasite-58680.firebaseapp.com',
      databaseURL: 'https://terrasite-58680.firebaseio.com',
      storageBucket: 'terrasite-58680.appspot.com',
      messagingSenderId: '292158142746'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Router />
        </Container>
      </Provider>
    );
  }
}

export default App;