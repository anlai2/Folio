import React, { Component } from 'react';
import { Text, View, Picker, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection } from './common';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

class AddCoinScreen extends Component {
    constructor(props) {
        super(props)
        const coins = []
        const checked = false

        this.state = { coins, checked }
    }
    
    componentWillMount() {
        // ASYNC HTTP Request to get coins from the API.
        this.props.fetchCoins
    }

    onButtonPress() {
        const { coins } = this.props;

        this.props.coinsSaved({ coins })
    }

    // Render all the coins that was fetched from the API.
    renderCoins() {
        return this.state.coins.map(coin =>
            <AddCoinDetail
                key={coin.name}
                check={this.state.checked}
                coinProp={coin}
                onChecked={() => {
                    this.setState({ checked: !this.state.checked })
                    this.props.coinChanged({ value: coin.symbol })
                }}
            />);
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
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
    const { id } = portfolio;

    return {
        id
    };
};
export default AddAssetsScreen;