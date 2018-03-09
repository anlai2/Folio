import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView } from 'react-native';
import { CoinDetail, CardSection, Button }  from '../common';

// Class component
class CoinList extends Component {
  state = { coins: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get coins from the API.
    fetch('https://api.coinmarketcap.com/v1/ticker')
    .then((response) => response.json())
    .then((responseData) => this.setState({ coins: responseData }));
  }
 
 // Render all the coins that was fetched from the API.
  renderCoins() {
    return this.state.coins.map(coin => 
    	<CoinDetail key={coin.name} coinProp={coin}/>); 
      //coinProp variable can be named anything as long as we use that name in other functions
  }
  
// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderCoins()}
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      </ScrollView>
    );
  };
};
 
// Make compomnent available to other parts of the application
export { CoinList };
