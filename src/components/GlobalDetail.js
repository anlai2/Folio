import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import { Button } from 'react-native-elements';

const GlobalDetail = ({ coinProp }) => {
    //Destructure references for nicer code
    const { total_market_cap_usd } = coinProp;
    const { headerContentLeftStyle,
        headerTextStyle } = styles;

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return (
        <TouchableOpacity onPress={() => console.log(id)}>
            <CardSection>
                <View style={headerContentLeftStyle}>
                    <Text style={styles.textStyle}>Global Market Cap</Text>
                    <Button
                        title={"$" + total_market_cap_usd}
                        buttonStyle={{
                            backgroundColor: "rgba(92, 99,216, 1)",
                            borderWidth: 0,
                            borderRadius: 60
                        }}
                    />
                </View>
            </CardSection>
        </TouchableOpacity>
    );
};

const styles = {
    headerContentLeftStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginLeft: 15
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
        fontWeight: 'bold',
        fontSize: 24
    }
};
export default GlobalDetail;