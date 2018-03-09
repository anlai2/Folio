import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import CoinDetail from './CoinDetail';

// Class component
class CoinList extends Component {
  state = { coins: [] };
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    fetch('https://api.coinmarketcap.com/v1/ticker/')
    .then((response) => response.json())
    .then((responseData) => this.setState({ coins: responseData }));
  }
 
 // Render all the albums that was fetched from the API.
  renderCoins() {
    return this.state.coins.map(coin => 
    	<CoinDetail key={coin.name} coinProp={coin}/>); 
      //albumProp variable can be named anything as long as we use that name in other functions
  }
  
// Render the component
  render() {
    return (
      <ScrollView>
        {this.renderCoins()}
      </ScrollView>
    );
  }
}
 
// Make compomnent available to other parts of the application
export default CoinList;
