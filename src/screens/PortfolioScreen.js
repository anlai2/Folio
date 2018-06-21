import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { Spinner } from '../components/common';
import { fetchPortfolio } from '../actions';
import PortfolioCoins from '../components/PortfolioCoins';

class PortfolioScreen extends Component {
  state = {
    coins: [],
    portfolio: {},
    loading: false,
    refreshing: false,
  };
  componentWillMount() {
    // ASYNC HTTP Request to get coins from the API.
    this.fetchPortfolio();
  }

  getPortfolio() {
    this.setState({ portfolio: this.props.coins });
  }

  fetchPortfolio = () => {
    this.setState({ loading: true });
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(response => response.json())
      .then(responseData => this.setState({ coins: responseData }))
      .then(() => this.getPortfolio())
      .then(() => this.setState({ loading: false }));
  };

  refreshPortfolio = () => {
    this.setState({ refreshing: true });
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
      .then(response => response.json())
      .then(responseData => this.setState({ coins: responseData }))
      .then(() => this.getPortfolio())
      .then(() => this.setState({ refreshing: false }));
  };

  // Render all the coins that was fetched from the API.
  renderPortfolio = () =>
    this.state.coins.map(coin =>
      (coin.symbol in this.state.portfolio ? (
        <PortfolioCoins
          key={coin.name}
          coinProp={coin}
          asset={this.state.portfolio[coin.symbol]}
          usd_value={(
              Math.round(this.state.portfolio[coin.symbol] * coin.price_usd * 100) / 100
            ).toString()}
        />
      ) : null));
  // coinProp variable can be named anything as long as we use that name in other functions

  render() {
    let portfolioTotal = 0;
    let coinValue;
    for (const coinType in this.state.portfolio) {
      coinValue = this.state.coins.filter(item => item.symbol === coinType)[0];
      portfolioTotal += this.state.portfolio[coinType] * coinValue.price_usd;
    }
    portfolioTotal = Math.round(portfolioTotal * 100) / 100;
    portfolioTotal = portfolioTotal.toString();
    this.state.portfolio === {}
      ? null
      : () => {
        this.getPortfolio();
        this.getPortfolioTotal();
      };
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, height: 250 }}>
          <Spinner />
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refreshPortfolio}
            />
          }
        >
          <LinearGradient
            style={styles.totalContainerStyle}
            colors={['#FF5637', '#FF444A', '#FF2D68']}
          >
            <Text style={styles.totalTextStyle}>Portfolio Value</Text>
            <Text style={styles.textValueStyle}>{`$${portfolioTotal}`}</Text>
          </LinearGradient>
          {_.isEmpty(this.state.portfolio) ? (
            <View style={styles.buttonStyle}>
              <View style={styles.cardContainer}>
                <TouchableOpacity
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                  onPress={() => Actions.addCoin()}
                >
                  <LinearGradient
                    style={styles.colorButtonContainer}
                    colors={['#FF5637', '#FF444A', '#FF2D68']}
                  >
                    <Text style={styles.textButtonStyle}>Add a Coin</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {_.isEmpty(this.state.portfolio) ? null : this.renderPortfolio()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  totalContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 20,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  totalTextStyle: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  cardContainer: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 20,
    position: 'relative',
  },
  colorButtonContainer: {
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
  addCoinButton: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textValueStyle: {
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  textButtonStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
};

const mapStateToProps = ({ portfolio }) => {
  const { checked, coins } = portfolio;

  return {
    checked,
    coins,
  };
};
export default connect(mapStateToProps, {
  fetchPortfolio,
})(PortfolioScreen);
