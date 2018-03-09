import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { Header, Button, Spinner, CardSection, CoinList } from './components/common';
import LoginForm from './components/LoginForm';

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

	renderContent(){
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={{flex: 1 }}>
						<CardSection>
							<CoinList />
						</CardSection>
					</View>
					);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}
	}
	render() {
		return (
			<View style={{flex: 1 }}>
			<Header headerText="CoinTracker" />
				{this.renderContent()}
			</View>
		);
	}
}

export default Home;