import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo';

const GlobalDetail = ({ coinProp }) => {
  // Destructure references for nicer code
  const { total_market_cap_usd } = coinProp;
  const {
    headerContentLeftStyle,
  } = styles;

  numberWithSpaces = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return (

    <LinearGradient
      style={headerContentLeftStyle}
      colors={['#FF5637', '#FF444A', '#FF2D68']}
    >
      <Text style={styles.textStyle}>Global Market Cap</Text>
      <Text style={styles.textValueStyle}>{`$${numberWithSpaces(total_market_cap_usd)}`}</Text>
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
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,

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
  },
};
export default GlobalDetail;
