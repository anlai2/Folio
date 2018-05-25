import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { connect } from 'react-redux';
import { Spinner } from '../components/common';
import { coinChecked, coinUnchecked, coinsSaved } from '../actions';
import AddCoinDetail from '../components/AddCoinDetail';

class AddCoinScreen extends Component {
    state = { loading: false, coins: [] }

    componentWillMount() {
      // ASYNC HTTP Request to get coins from the API.
      this.setState({ loading: true });
      fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
        .then(response => response.json())
        .then(responseData => this.setState({ coins: responseData }))
        .then(() => this.setState({ loading: false }));
    }

    onButtonPress() {
      this.props.coinsSaved();
      Actions.addAsset();
    }

    // Render all the coins that was fetched from the API.
    renderCoins() {
      const { checked } = this.props;
      return this.state.coins.map(coin =>
        (<AddCoinDetail
          key={coin.name}
          check={checked.indexOf(coin.symbol) > -1}
          coinProp={coin}
          onChecked={() => {
                    checked.indexOf(coin.symbol) > -1 ?
                        this.props.coinUnchecked({ value: checked.indexOf(coin.symbol) }) :
                        this.props.coinChecked({ value: coin.symbol });
                }}
        />));
      // coinProp variable can be named anything as long as we use that name in other functions
    }

    renderButton() {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.onButtonPress()}
          >
            <LinearGradient
              style={styles.addButtonContainer}
              colors={['#FF5637', '#FF444A', '#FF2D68']}
            >

              <Text style={styles.addButtonText}>Add Coins</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>);
    }

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
            <ScrollView>
              {this.renderButton()}
              {this.renderCoins()}
            </ScrollView>
          </View>
        </View>
      );
    }
}

const styles = {
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonContainer: {
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
  addButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
};

const mapStateToProps = ({ portfolio }) => {
  const { checked } = portfolio;

  return {
    checked,
  };
};
export default connect(mapStateToProps, {
  coinChecked, coinUnchecked, coinsSaved,
})(AddCoinScreen);
