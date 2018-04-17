import React, { Component } from 'react';
import * as firebase from 'firebase';
import { ScrollView, View } from 'react-native';
import CoinDetail from './CoinDetail';
import { CardSection, Header } from './common';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';

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
      <CoinDetail key={coin.name} coinProp={coin} />);
    //coinProp variable can be named anything as long as we use that name in other functions
  }

  // Render the component
  render() {
    return (
      <View style={styles.viewContainer}>
        <LinearGradient
          colors={['#452768', '#171032', '#04081B']}>
          <ScrollView>
            {/* <Header headerText="Dashboard" /> */}
            {this.renderCoins()}
            <CardSection>
              <Button
                onPress={() => firebase.auth().signOut()}
                title="LOGOUT "
                titleStyle={{ fontWeight: 'bold' }}
                buttonStyle={{
                  backgroundColor: "rgba(92, 99,216, 1)",
                  width: 300,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                containerStyle={{ marginTop: 20 }}
              />
            </CardSection>
          </ScrollView>
        </LinearGradient>
      </View>
    );
  };
};

const styles = {
  viewContainer: {
    flex: 1,
  }
}

// Make compomnent available to other parts of the application
export default CoinList;
