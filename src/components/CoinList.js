import React, { Component } from 'react';
import { Text, ScrollView, View, RefreshControl, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import CoinDetail from './CoinDetail';
import GlobalDetail from './GlobalDetail';
import { Spinner } from './common';
import { logoutUserSuccess, fetchPortfolio } from '../actions';

// Class component
class CoinList extends Component {
  state = {
    coins: [],
    global: {},
    loading: false,
    refreshing: false,
  };

  componentWillMount() {
    this.fetchCoins();
    this.props.fetchPortfolio();
  }

  fetchCoins = async () => {
    this.setState({ loading: true });

    await fetch('https://api.coinmarketcap.com/v1/global/')
      .then(response => response.json())
      .then(responseData => this.setState({ global: responseData }));

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
      .then(response => response.json())
      .then(responseData => this.setState({ coins: responseData }))
      .then(() => this.setState({ loading: false }));
  }

  refreshCoins() {
    this.setState({ refreshing: true });
    fetch('https://api.coinmarketcap.com/v1/global/')
      .then(response => response.json())
      .then(responseData => this.setState({ global: responseData }));

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
      .then(response => response.json())
      .then(responseData => this.setState({ coins: responseData }))
      .then(() => this.setState({ refreshing: false }));
  }

  logoutUser() {
    this.props.logoutUserSuccess();
  }


  renderGlobal() {
    return (
      <GlobalDetail coinProp={this.state.global} />);
  }

  // Render all the coins that was fetched from the API.
  renderCoins() {
    return this.state.coins.map(coin =>
      <CoinDetail key={coin.name} coinProp={coin} />);
    // coinProp variable can be named anything as long as we use that name in other functions
  }

  // Render the component
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.viewContainer}>
          <View style={{ flex: 1, height: 250 }}>
            <Spinner />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.viewContainer}>
        <View style={{ backgroundColor: 'white' }}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.refreshCoins()}
              />
              }
          >
            {/* <Header headerText="Dashboard" /> */}
            {this.renderGlobal()}
            {this.renderCoins()}
            <TouchableOpacity
              style={{ alignItems: 'center', justifyContent: 'center' }}
              onPress={() => this.logoutUser()}
            >
              <LinearGradient
                style={styles.logoutButtonContainer}
                colors={['#FF5637', '#FF444A', '#FF2D68']}
              >
                <Text style={styles.logoutButtonText}>LOGOUT</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}


const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: '#F0F2F6',
  },
  logoutButtonContainer: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: 300,
    height: 45,
    padding: 15,
    borderRadius: 20,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  logoutButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
};

const mapStateToProps = ({ auth, portfolio }) => {
  const {
    email, password, error, loading, coins,
  } = { auth, portfolio };
  return {
    email,
    password,
    error,
    loading,
    coins,
  };
};
export default connect(mapStateToProps, {
  logoutUserSuccess, fetchPortfolio,
})(CoinList);
