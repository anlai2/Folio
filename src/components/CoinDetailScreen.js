import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CoinDetailScreen extends Component {
    state = { coinDetail: [] }
    componentWillMount() {
        fetch(`https://api.coinmarketcap.com/v1/ticker/${this.props.coinName}/`)
            .then((response) => response.json())
            .then((responseData) => console.log(responseData));
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.coinName}
                </Text>
            </View>
        )
    }
}

export default CoinDetailScreen;