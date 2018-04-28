import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import { Button, CheckBox } from 'react-native-elements';

const PortfolioCoins = ({ coinProp }) => {
	//Destructure references for nicer code
	const { id, name, symbol, price_usd } = coinProp;
	const { headerContentLeftStyle,
		headerContentRightStyle,
		headerTextStyle } = styles;

	return (
		<TouchableOpacity onPress={() => console.log(id)}>
			<CardSection>
				<View style={headerContentLeftStyle}>
					{/* <Text style={styles.textStyle}>{rank}</Text> */}
					<Text style={headerTextStyle}>{name}      </Text>
					<Text style={styles.textSymbolStyle}>{symbol}</Text>
				</View>
				<View style={headerContentRightStyle}>
				<Button
						title={"$" + price_usd}
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
		</TouchableOpacity>
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