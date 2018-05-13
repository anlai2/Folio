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
        portfolioTotal: 0,
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

    // Render all the coins that was fetched from the API.
    renderPortfolio = () => {
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
        let portfolioTotal = 0;
        let coinValue;
        for (let coinType in this.state.portfolio) {
            coinValue = this.state.coins.filter((item) => item.symbol === coinType)[0];
            portfolioTotal += this.state.portfolio[coinType] * coinValue.price_usd;
        }
        portfolioTotal = Math.round(portfolioTotal * 100) / 100;
        portfolioTotal = portfolioTotal.toString();
        // Object.values(this.state.portfolio).forEach((value) => {
        //     portfolioTotal += value * 
        // })
        (this.state.portfolio === {} ? null : () => {
            this.getPortfolio();
            this.getPortfolioTotal();
        })
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, height: 250 }}>
                    <Spinner />
                </View>
            )
        } else {
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
                        <LinearGradient style={styles.totalContainerStyle}
                            colors={['#FF5637', '#FF444A', '#FF2D68']}>
                            <Text style={styles.totalTextStyle}>Portfolio Value</Text>
                            <Text style={styles.textValueStyle}>{"$" + portfolioTotal}</Text>
                        </LinearGradient>
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
                        {_.isEmpty(this.state.portfolio) ?
                            null :
                            this.renderPortfolio()}
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = {
    viewContainer: {
        flex: 1
    },
    totalContainerStyle: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 1,
        // marginLeft: 15
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 30,
        margin: 10,
        borderRadius: 20,
        shadowOffset: { width: 3, height: 3, },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    totalTextStyle: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: '300',
        fontSize: 15,
        marginBottom: 20,
    },
    addCoinButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textValueStyle: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
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