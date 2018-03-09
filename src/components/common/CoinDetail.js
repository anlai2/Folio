import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from '../common';

const CoinDetail = ({ coinProp }) => {
	//Destructure references for nicer code
	const { name, symbol, price_usd, rank, percent_change_24h } = coinProp;
	const {headerContentLeftStyle,
		headerContentRightStyle, 
		headerTextStyle } = styles;

	return (
		<Card>
			<CardSection>
			<View style={headerContentLeftStyle}>
				<Text style={{ fontSize: 12 }}>{rank}</Text>
				<Text style={headerTextStyle}>{name}</Text>
				<Text>{symbol}</Text>
			</View>
			<View style={headerContentRightStyle}>
				<Text style={headerTextStyle}>{ price_usd }</Text>
				<Text>{percent_change_24h}</Text>
			</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentLeftStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		flex: 1
	},
	headerContentRightStyle: {
		alignItems: 'flex-end',
		flex: 1
	},
	headerTextStyle: {
		fontSize: 18
	}
};
export { CoinDetail };