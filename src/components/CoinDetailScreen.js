import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CoinDetailScreen extends Component {
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