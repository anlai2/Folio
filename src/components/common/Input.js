import React from 'react';
import { TextInput, View, Text} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
	const { inputStyle, labelStyle, containerStyle} = styles;
	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry} //Sets this to true and hides password text
				placeholder={placeholder}
				autoCorrect={false} //Turns off autocorrect for all users
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = {
	inputStyle: { //user input space
		color: '#FFF',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2 //proportion of space given out of the total flex (3)
	},
	labelStyle: { //"Email" 
		fontSize: 18,
		color: '#FFF',
		paddingLeft: 20,
		flex: 1 //proportion of space given out of the total flex (3)
	},
	containerStyle: {
		height: 40,
		flex: 1, //fills up all space availible and is not sharing w/ any children
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#2A033E',
		borderRadius: 50
	}
};
export { Input };