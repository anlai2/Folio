import React from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

const PortfolioCoins = ({ coinProp, asset, usd_value }) => {
  // Destructure references for nicer code
  const { name } = coinProp;
  const {
    headerContentLeftStyle,
    headerContentRightStyle,
    headerTextStyle,
  } = styles;

  return (
    <CardSection>
      <View style={headerContentLeftStyle}>
        <Text style={headerTextStyle}>{name}      </Text>
        <Text style={styles.textSymbolStyle}>{asset}</Text>
      </View>
      <View style={headerContentRightStyle}>
        <Text style={headerTextStyle}>{`$${usd_value}`}</Text>
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
    color: '#434343',
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
export default PortfolioCoins;
