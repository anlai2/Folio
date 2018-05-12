import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Card, CardSection, Input } from './common';
// import { Input } from 'react-native-elements';
import { coinChanged, assetChanged } from '../actions';
import { connect } from 'react-redux';
import AddAssetsScreen from './AddAssetsScreen';

const AddAssetsDetail = ({ coinProp, onChangeText }) => {
    //Destructure references for nicer code
    const { id, name, symbol, checked } = coinProp; //receive objects from api
    const { headerContentLeftStyle,
        headerContentRightStyle,
        headerTextStyle } = styles;

    return (
        <CardSection>
            <View style={headerContentLeftStyle}>
                {/* <Text style={styles.textStyle}>{rank}</Text> */}
                <Text style={headerTextStyle}>{name}</Text>
                <Text style={styles.textSymbolStyle}>{symbol}</Text>
            </View>
            <View style={headerContentRightStyle}>
                <TextInput 
                    placeholder="0.0000000"
                    autoCorrect={false} //Turns off autocorrect for all users
                    style={styles.inputStyle}
                    keyboardType='numeric'
                    onChangeText={onChangeText}
                />
            </View>
        </CardSection>
    );
};

const styles = {
    headerContentLeftStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 15
    },
    headerContentRightStyle: {
        // marginTop: 18,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // justifyContent:'center',
        paddingRight: 25
    },
    headerTextStyle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20,
        color: '#434343'
    },
    textPercentStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: '#434343',
        fontSize: 15,
        marginRight: 20,
        fontWeight: '700'
    },
    textSymbolStyle: {
        color: '#555974',
    },
    redText: {
        color: 'red'
    },
    greenText: {
        color: '#18A76D'
    },
    inputStyle: {
        color: '#434343',
        backgroundColor: 'transparent',
        borderBottomColor: '#434343',
		fontSize: 15,
		width: 100
    }
};

export default AddAssetsDetail;