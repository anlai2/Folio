import React, { Component } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo';
import { CardSection } from './common';
import { Button } from 'react-native-elements';

class CoinDetailScreen extends Component {
    state = { coinDetail: [] }
    componentWillMount() {
        fetch(`https://api.coinmarketcap.com/v1/ticker/${this.props.coinName}/`)
            .then((response) => response.json())
            .then((responseData) => this.setState({ coinDetail: responseData }));
    }

    renderDetails() {
        return this.state.coinDetail.map(coin =>
            <View
                key={coin.name}
            >
                <View
                    style={styles.symbolContainer}
                >
                    <View>
                        <Text style={styles.symbolTextStyle}>
                            {coin.name + " (" + coin.symbol + ")"}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.symbolTextStyle}>
                            {"$" + coin.price_usd}
                        </Text>
                    </View>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.symbolTextStyle}>
                        Details:
                    </Text>
                    <Text style={styles.detailTextStyle}>
                        {"1 Hour Change: " + coin.percent_change_1h + "%"}
                    </Text>

                    <Text style={styles.detailTextStyle}>
                        {"24 Hour Change: " + coin.percent_change_24h + "%"}
                    </Text>

                    <Text style={styles.detailTextStyle}>
                        {"7 Day Change: " + coin.percent_change_7d + "%"}
                    </Text>
                    <View>
                        <Button
                            onPress={() => Linking.openURL(`https://twitter.com/search?f=tweets&vertical=news&q=%23${coin.name}&src=typd`)}
                            title="View Tweets "
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
                    </View>
                </View>
            </View>
        );
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
        return (
            <View style={styles.viewContainer}>
                <LinearGradient
                    colors={['#452768', '#171032', '#04081B']}>
                    <ScrollView>
                        {/* <Header headerText="Dashboard" /> */}
                        {this.renderDetails()}
                    </ScrollView>
                </LinearGradient>
            </View>
        )
    }
}

const styles = {
    viewContainer: {
        flex: 1,
        backgroundColor: "#2A033E"
    },
    symbolContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    detailContainer: {
        flex: 1
    },
    symbolTextStyle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    detailTextStyle: {
        color: '#FFF',
        fontSize: 18
    }
}

export default CoinDetailScreen;