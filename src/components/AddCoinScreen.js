import React, { Component } from 'react';
import { Text, View, Picker, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection, Spinner } from './common';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { coinChecked, coinUnchecked, coinsSaved } from '../actions';
import AddCoinDetail from './AddCoinDetail';

class AddCoinScreen extends Component {
    constructor(props) {
        super(props)
        const coins = []
        const checked = false

        this.state = { coins, checked }
    }
    state = { loading: false }

    componentWillMount() {
        // ASYNC HTTP Request to get coins from the API.
        this.setState({ loading: true })
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=250')
            .then((response) => response.json())
            .then((responseData) => this.setState({ coins: responseData }))
            .then(() => this.setState({ loading: false }))
    }

    onButtonPress() {
        const { checked } = this.props;
        console.log(checked);
        this.props.coinsSaved({ checked })
        //Actions.addAsset();
    }

    // Render all the coins that was fetched from the API.
    renderCoins() {
        const { checked } = this.props;
        return this.state.coins.map(coin =>
            <AddCoinDetail
                key={coin.name}
                check={checked.indexOf(coin.symbol) > -1 ? true : false}
                coinProp={coin}
                onChecked={() => {
                    checked.indexOf(coin.symbol) > -1 ?
                        this.props.coinUnchecked({ value: checked.indexOf(coin.symbol) }) :
                        this.props.coinChecked({ value: coin.symbol })
                }}
            />);
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.viewContainer}>
                    <View style={{ flex: 1, height: 250 }}>
                        <Spinner />
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={styles.viewContainer}>
                    <LinearGradient
                        colors={['#452768', '#171032', '#04081B']}>
                        <ScrollView>
                            <View style={styles.headerContainer}>
                                <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
                                    Pick Coin(s)
                            </Text>
                            </View>
                            <Button
                                onPress={() => this.onButtonPress()}
                                title="Add Coins "
                                titleStyle={{ fontWeight: 'bold' }}
                                buttonStyle={{
                                    backgroundColor: "rgba(92, 99,216, 1)",
                                    width: 300,
                                    height: 45,
                                    borderColor: "transparent",
                                    borderWidth: 0,
                                    borderRadius: 5,
                                    paddingLeft: 10
                                }}
                                containerStyle={{ marginTop: 20 }}
                            />
                            {this.renderCoins()}
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
    },
    cardContainer: {
        backgroundColor: 'rgba(92, 99,216, 1)',
        borderColor: '#000'
    },
    headerContainer: {
        backgroundColor: "#23213F",
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderRadius: 50
    }
}

const mapStateToProps = ({ portfolio }) => {
    const { checked } = portfolio;

    return {
        checked
    };
};
export default connect(mapStateToProps, {
    coinChecked, coinUnchecked, coinsSaved
})(AddCoinScreen);