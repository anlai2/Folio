import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
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
        <CardSection>
            <View style={headerContentLeftStyle}>
                <Text style={styles.textStyle}>Global Market Cap</Text>
                <Button
                    title={"$" + numberWithSpaces(total_market_cap_usd)}
                    textStyle={{ fontSize: 24 }}
                    buttonStyle={{
                        backgroundColor: "rgba(92, 99,216, 1)",
                        borderWidth: 0,
                        borderRadius: 60,
                        paddingHorizontal: 25
                    }}
                />
            </View>
        </CardSection>
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