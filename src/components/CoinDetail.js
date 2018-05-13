import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const CoinDetail = ({ coinProp }) => {
  // Destructure references for nicer code
  const {
    id, name, symbol, price_usd, percent_change_24h,
  } = coinProp;
  const {
    headerContentLeftStyle,
    headerContentRightStyle,
    headerTextStyle,
  } = styles;

  return (
    <TouchableOpacity onPress={() => Actions.coinDetail({ coinName: id })}>
      <CardSection>
        <View style={headerContentLeftStyle}>
          {/* <Text style={styles.textStyle}>{rank}</Text> */}
          <Text style={headerTextStyle}>{name} </Text>
          <Text style={styles.textSymbolStyle}>{symbol}</Text>
        </View>
        <View style={headerContentRightStyle}>
          <Text
            style={{
              color: '#434343',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            {`$${price_usd}`}
          </Text>
          <Text
            style={[
              styles.textPercentStyle,
              percent_change_24h < 0 ? styles.redText : styles.greenText,
            ]}
          >
            {`${percent_change_24h}%  `}
          </Text>
        </View>
      </CardSection>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentLeftStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    marginLeft: 15,
  },
  headerContentRightStyle: {
    // marginTop: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
    // justifyContent:'center',
    flex: 1,
  },
  headerTextStyle: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    color: '#434343',
  },
  textPercentStyle: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    color: 'white',
    fontSize: 15,
    marginRight: 20,
    fontWeight: '700',
  },
  textSymbolStyle: {
    color: '#555974',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: '#18A76D',
  },
};
export default CoinDetail;
