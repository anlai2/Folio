import React, { Component } from 'react';
import { Text, View, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection, Spinner } from './common';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { coinChecked, coinUnchecked, coinsSaved } from '../actions';
import AddCoinDetail from './AddCoinDetail';

class AddCoinScreen extends Component {
    state = { loading: false, coins: [] }

    componentWillMount() {
        // ASYNC HTTP Request to get coins from the API.
        this.setState({ loading: true })
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
            .then((response) => response.json())
            .then((responseData) => this.setState({ coins: responseData }))
            .then(() => this.setState({ loading: false }))
    }

    onButtonPress() {
        const { checked } = this.props;
        console.log(checked);
        this.props.coinsSaved()
        Actions.addAsset();
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
                    <View style={{ backgroundColor: 'white' }}>
                        <ScrollView>
                            <View style={styles.buttonContainer}>
                                {/* <Button
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
                            /> */}
                                <TouchableOpacity
                                    onPress={() => this.onButtonPress()}
                                >
                                <LinearGradient
                                    style={styles.addButtonContainer}
                                    colors={['#FF5637', '#FF444A', '#FF2D68']}>
                                    
                                        <Text style={styles.addButtonText}>Add Coins</Text>
                                </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            {this.renderCoins()}
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = {
    viewContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addButtonContainer: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        alignItems: 'center',
        width: 300,
        height: 45,
        padding: 15,
        borderRadius: 20,
        shadowOffset: { width: 3, height: 3, },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    addButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
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