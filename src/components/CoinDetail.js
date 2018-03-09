import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const CoinDetail = ({ coinProp }) => {
	//Destructure references for nicer code
	const { name, symbol, rank, price_usd } = coinProp;
	const { headerContentStyle, 
			headerTextStyle} = styles;

	return (
		<Card>
			<CardSection>
			<View style={headerContentStyle}>
				<Text style={headerTextStyle}>{name}</Text>
				<Text>{symbol}</Text>
				<Text>{rank}</Text>
				<Text>{price_usd}</Text>
			</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
	},
	headerTextStyle: {
		fontSize: 18,
		alignItems: 'center'
	}
};
export default CoinDetail;