import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import CoinList from './src/components/CoinList';

//Create a component
const App = () => (
  <View style={{ flex: 1 }}>
	<Header headerText={'Coins'}/>
  <CoinList />
  </View>
);

AppRegistry.registerComponent('coins', () => App);

export default App;