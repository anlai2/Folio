import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import {LinearGradient} from 'expo';
import { Button } from 'react-native-elements';

const GlobalDetail = ({ coinProp }) => {
    //Destructure references for nicer code
    const { total_market_cap_usd, id } = coinProp;
    const { headerContentLeftStyle,
        headerTextStyle } = styles;

    numberWithSpaces = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        
            <LinearGradient style={headerContentLeftStyle}
                colors={['#FF5637', '#FF444A', '#FF2D68']}>
                <Text style={styles.textStyle}>Global Market Cap</Text>
                <Text style={styles.textValueStyle}>{"$" + numberWithSpaces(total_market_cap_usd)}</Text>
            </LinearGradient>
    );
};

const styles = {
    headerContentLeftStyle: {
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
    headerTextStyle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20,
        color: 'white'
    },
    textStyle: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: '300',
        fontSize: 15,
        marginBottom: 20,
    },
    textValueStyle: {
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    }
};
export default GlobalDetail;