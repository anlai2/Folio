import React, { Component } from 'react';
import { Text, View, ScrollView, Linking, TouchableOpacity } from 'react-native';
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
                style={{ flex: 1}}
            >
                <LinearGradient style={styles.symbolContainer}
                    colors={['#FF5637', '#FF444A', '#FF2D68']}>
                    <Text style={styles.symbolTextStyle}>{coin.name + " (" + coin.symbol + ")"}</Text>
                    <Text style={styles.symbolTextStyle}>{"$" + coin.price_usd}</Text>
                </LinearGradient>
                <CardSection>
                    <View style={styles.contentContainer}>
                        <Text style={styles.detailTextStyle}>
                            {"1 Hour Change: " + coin.percent_change_1h + "%"}
                        </Text>
                        <Text style={styles.detailTextStyle}>
                            {"24 Hour Change: " + coin.percent_change_24h + "%"}
                        </Text>
                        <Text style={styles.detailTextStyle}>
                            {"7 Day Change: " + coin.percent_change_7d + "%"}
                        </Text>
                    </View>
                </CardSection>
                <TouchableOpacity
                    style={{alignItems:'center', justifyContent: 'center'}}
                    onPress={() => Linking.openURL(`https://twitter.com/search?f=tweets&vertical=news&q=%23${coin.name}&src=typd`)}
                >
                    <LinearGradient
                        style={styles.tweetButtonContainer}
                        colors={['#FF5637', '#FF444A', '#FF2D68']}>
                        <Text style={styles.tweetButtonText}>View Tweets</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
        //coinProp variable can be named anything as long as we use that name in other functions
    }

    render() {
        return (
            <View style={styles.viewContainer}
            >
                <ScrollView>
                    {/* <Header headerText="Dashboard" /> */}
                    {this.renderDetails()}
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    viewContainer: {
        flex: 1,
        backgroundColor: "#F0F2F6"
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // justifyContent:'center',
        flex: 1
    },
    symbolContainer: {
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
    detailContainer: {
        flex: 1
    },
    symbolTextStyle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    detailTextStyle: {
        color: '#434343',
        fontSize: 15,
        margin: 5,
    },
    tweetButtonContainer: {
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
    tweetButtonText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    }
}

export default CoinDetailScreen;