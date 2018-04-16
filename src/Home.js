import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner, CardSection, CoinList } from './components/common';
import LoginForm from './components/LoginForm';
import Router from './Router';

class Home extends Component {
	state = { loggedIn: null};
	componentWillMount() {
		firebase.initializeApp({
		    apiKey: 'AIzaSyAdzycIzh6NhxKEMXNsVloP_4PGJgbwiHs',
		    authDomain: 'auth-94d8e.firebaseapp.com',
		    databaseURL: 'https://auth-94d8e.firebaseio.com',
		    projectId: 'auth-94d8e',
		    storageBucket: 'auth-94d8e.appspot.com',
		    messagingSenderId: '193969161372'
  		});

  		firebase.auth().onAuthStateChanged((user) => {
  			if(user){
  				this.setState({ loggedIn: true});
  			} else{
  				this.setState({ loggedIn: false});
  			}
  		});
	}

	render() {
		return (
			<Router />
		);
	}
}

export default Home;