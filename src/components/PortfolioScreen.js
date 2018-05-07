import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection, Spinner } from './common';
import { connect } from 'react-redux';
import { fetchPortfolio } from '../actions';
import { Button, Card } from 'react-native-elements';
import PortfolioCoins from './PortfolioCoins';

class PortfolioScreen extends Component {
    state = {
        coins: [],
        portfolio: {},
        loading: false,
        refreshing: false
    };
    componentWillMount() {
        // ASYNC HTTP Request to get coins from the API.
        this.fetchPortfolio();
    }

    fetchPortfolio = () => {
        this.setState({ loading: true })
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
            .then((response) => response.json())
            .then((responseData) => this.setState({ coins: responseData }))
            .then(() => this.getPortfolio())
            .then(() => this.setState({ loading: false }))
    }

    refreshPortfolio = () => {
        this.setState({ refreshing: true })
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
            .then((response) => response.json())
            .then((responseData) => this.setState({ coins: responseData }))
            .then(() => this.getPortfolio())
            .then(() => this.setState({ refreshing: false }))
    }

    getPortfolio() {
        this.setState({ portfolio: this.props.coins })
    }

    getAssetValue = (price, asset) => {
        return price * coin.price;
    }

    // Render all the coins that was fetched from the API.
    renderPortfolio() {
        return this.state.coins.map(coin =>
            (coin.symbol in this.state.portfolio ?
                <PortfolioCoins
                    key={coin.name}
                    coinProp={coin}
                    asset={this.state.portfolio[coin.symbol]}
                    usd_value={(Math.round((this.state.portfolio[coin.symbol] * coin.price_usd) * 100) / 100)
                        .toString()
                    }
                /> : null));
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
        (this.state.portfolio === {} ? null : () => this.getPortfolio())
        if (this.state.loading) {
            return (
                <LinearGradient
                    colors={['#452768', '#171032', '#04081B']}
                    style={{ flex: 1 }}
                >
                    <View style={{ flex: 1, height: 250 }}>
                        <Spinner />
                    </View>
                </LinearGradient>
            )
        } else {
            return (
                <LinearGradient
                    colors={['#452768', '#171032', '#04081B']}
                    style={{ flex: 1 }}
                >
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this.refreshPortfolio}
                            />
                        }
                    >
                        <Card
                            containerStyle={styles.cardContainer}
                        >
                            <View style={{ backgroundColor: "#23213F", padding: 10, alignItems: "center" }}>
                                <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
                                    Portfolio Value:
                            </Text>
                            </View>
                        </Card>
                        {_.isEmpty(this.state.portfolio) ?
                            <View style={styles.addCoinButton}>
                                <Button
                                    onPress={() => Actions.addCoin()}
                                    title="Add a Coin "
                                    titleStyle={{ fontWeight: 'bold' }}
                                    buttonStyle={{
                                        backgroundColor: "rgba(92, 99,216, 1)",
                                        width: 300,
                                        height: 45,
                                        borderColor: "transparent",
                                        borderWidth: 0,
                                        borderRadius: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    containerStyle={{ marginTop: 20 }}
                                />
                            </View>
                            : null}
                        {this.renderPortfolio()}
                    </ScrollView>
                </LinearGradient>
            );
        }
    }
}

const styles = {
    viewContainer: {
        flex: 1
    },
    cardContainer: {
        backgroundColor: 'rgba(92, 99,216, 1)',
        borderColor: '#000'
    },
    addCoinButton: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const mapStateToProps = ({ portfolio }) => {
    const { checked, coins } = portfolio;

    return {
        checked, coins
    };
};
export default connect(mapStateToProps, {
    fetchPortfolio
})(PortfolioScreen);