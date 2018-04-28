import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import { CardSection } from './common';
import { Button, Card } from 'react-native-elements';
import PortfolioCoins from './PortfolioCoins';

class PortfolioScreen extends Component {
    state = { coins: [] };
    componentWillMount() {
        // ASYNC HTTP Request to get coins from the API.
        fetch('https://api.coinmarketcap.com/v1/ticker/?limit=200')
            .then((response) => response.json())
            .then((responseData) => this.setState({ coins: responseData }));
    }

    // Render all the coins that was fetched from the API.
    renderCoins() {
        return this.state.coins.map(coin =>
            <PortfolioCoins key={coin.name} coinProp={coin} />);
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <LinearGradient
                    colors={['#452768', '#171032', '#04081B']}>
                    <Card
                        containerStyle={styles.cardContainer}
                    >
                        <View style={{ backgroundColor: "#FFF", padding: 10, alignItems: "center" }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Portfolio Value:
                            </Text>
                        </View>
                    </Card>
                    <ScrollView>
                        {this.renderCoins()}                        
                        <CardSection>
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

const styles = {
    viewContainer: {
        flex: 1,
        backgroundColor: "#2A033E"
    },
    cardContainer: {
        backgroundColor: 'rgba(92, 99,216, 1)',
        borderColor: '#000'
    }
}

export default PortfolioScreen;