import React, { Component } from 'react';
import { Text, View, ScrollView, Linking } from 'react-native';
import { LinearGradient } from 'expo';
import { CardSection } from './common';
import { Button } from 'react-native-elements';

class CoinDetailScreen extends Component {
    state = {
        coinDetail: [],
        twitterResponse: null,

    }

    //     'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
    //  oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
    //  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
    //  oauth_token="access-token-for-authed-user", oauth_version="1.0"'

    componentWillMount() {
        var data = {
            authorization: 'OAuth',
            oauth_consumer_key: 'JuFTuDh0b7iF0DD6GIiqFzOYS',
            oauth_nonce: 'generated-none',
            oauth_signature: 'generated-signature',
            oauth_signature_method: 'HMAC-SHA1',
            oauth_timestamp: 'generated-timestamp',
            oauth_token: '0YOXFtM2gQv9cIcEMcSBhhyNBjWwRR0ot9s4MlbET1HrP',
            oauth_version: '1.0'
        }

        fetch(`https://api.coinmarketcap.com/v1/ticker/${this.props.coinName}/`)
            .then((response) => response.json())
            .then((responseData) => this.setState({ coinDetail: responseData }));

        fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${this.props.coinName}`, {
            method: 'GET',
            headers: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((responseData) => console.log(responseData))
    }


    renderDetails() {
        return this.state.coinDetail.map(coin =>
            <View
                key={coin.name}
                style={{ flex: 1 }}
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
                    <View>
                        <Text style={styles.symbolTextStyle}>
                            {"Rank " + coin.rank}
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
                    <View style={{ paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>
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
            <LinearGradient
                colors={['#452768', '#171032']}
                style={styles.viewContainer}
            >
                <ScrollView>
                    {/* <Header headerText="Dashboard" /> */}
                    {this.renderDetails()}
                </ScrollView>
            </LinearGradient>
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