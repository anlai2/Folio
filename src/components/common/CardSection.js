import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
	return (
		<View style={styles.containerStyle}>
			{props.children}
		</View>
	);
};

const styles = {
	containerStyle: {
		padding: 10,
		backgroundColor: '#23213F',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderRadius: 20,
		position: 'relative'
	}
};
export { CardSection };