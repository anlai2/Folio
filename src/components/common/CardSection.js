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
		margin: 10, 
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderRadius: 20,
		position: 'relative',
		shadowOffset: { width: 3, height: 3, },
		shadowColor: 'black',
		shadowOpacity: 0.2,

	}
};
export { CardSection };