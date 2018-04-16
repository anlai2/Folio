import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';


class Home extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyAXk7-GnAzz0UHoG4_RuW4FWbeZXkoY4SU",
			authDomain: "cointracker-bb394.firebaseapp.com",
			databaseURL: "https://cointracker-bb394.firebaseio.com",
			projectId: "cointracker-bb394",
			storageBucket: "",
			messagingSenderId: "422073842257"
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

export default Home;