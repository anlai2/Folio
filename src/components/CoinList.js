import React, { Component } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import CoinDetail from './CoinDetail';
import GlobalDetail from './GlobalDetail';
import { connect } from 'react-redux';
import { CardSection, Spinner } from './common';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import { logoutUserSuccess, fetchPortfolio } from '../actions';

// Class component
class CoinList extends Component {
  state = {
    coins: [],
    global: {},
    loading: false,
    refreshing: false
  };

  componentWillMount() {
    this.fetchCoins();
    this.props.fetchPortfolio();
  }

  fetchCoins() {
    this.setState({ loading: true })
    fetch('https://api.coinmarketcap.com/v1/global/')
      .then((response) => response.json())
      .then((responseData) => this.setState({ global: responseData }));
    console.log(this.state.global);

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
      .then((response) => response.json())
      .then((responseData) => this.setState({ coins: responseData }))
      .then(() => this.setState({ loading: false }))
    console.log(this.state.coins);
  }

  refreshCoins() {
    this.setState({ refreshing: true })
    fetch('https://api.coinmarketcap.com/v1/global/')
      .then((response) => response.json())
      .then((responseData) => this.setState({ global: responseData }));

    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
      .then((response) => response.json())
      .then((responseData) => this.setState({ coins: responseData }))
      .then(() => this.setState({ refreshing: false }))
  }

  logoutUser() {
    this.props.logoutUserSuccess();
  }


  renderGlobal() {
    return (
      <GlobalDetail coinProp={this.state.global} />)
  }

  // Render all the coins that was fetched from the API.
  renderCoins() {
    return this.state.coins.map(coin =>
      <CoinDetail key={coin.name} coinProp={coin} />);
    //coinProp variable can be named anything as long as we use that name in other functions
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
      )
    } else {
      return (
        <View style={styles.viewContainer}>
          <LinearGradient
            colors={['#452768', '#171032', '#04081B']}>
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
              <CardSection>
                <Button
                  onPress={() => this.logoutUser()}
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
    }
  }
}


const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: "#2A033E"
  }
}

const mapStateToProps = ({ auth, portfolio }) => {
  const { email, password, error, loading, coins } = { auth, portfolio };
  return {
    email,
    password,
    error,
    loading,
    coins
  };
};
export default connect(mapStateToProps, {
  logoutUserSuccess, fetchPortfolio
})(CoinList);