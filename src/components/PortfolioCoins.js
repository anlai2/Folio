import React from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';
import { Button, CheckBox } from 'react-native-elements';

const PortfolioCoins = ({ coinProp, asset, usd_value }) => {
	//Destructure references for nicer code
	const { id, name, price_usd } = coinProp;
	const { headerContentLeftStyle,
		headerContentRightStyle,
		headerTextStyle } = styles;

	return (
		<CardSection>
			<View style={headerContentLeftStyle}>
				{/* <Text style={styles.textStyle}>{rank}</Text> */}
				<Text style={headerTextStyle}>{name}      </Text>
				<Text style={styles.textSymbolStyle}>{asset}</Text>
			</View>
			<View style={headerContentRightStyle}>
				<Button
					title={"$" + usd_value}
					buttonStyle={{
						backgroundColor: "rgba(92, 99,216, 1)",
						// width: 120,
						// height: 50,
						// borderColor: "transparent",
						borderWidth: 0,
						borderRadius: 60
					}}
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
		flex: 1
	},
	headerTextStyle: {
		fontWeight: 'bold',
		marginBottom: 10,
		fontSize: 20,
		color: 'white'
	},
	textPercentStyle: {
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		color: 'white',
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
	}
};
export default PortfolioCoins;