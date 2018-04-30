import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Spinner } from './common';
import { Button } from 'react-native-elements';
class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: '#23213F' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size="large" />;
		}

		return (
			<Button
                onPress={() => this.onButtonPress()}
                title="LOGIN "
                titleStyle={{ fontWeight: 'bold' }}
                buttonStyle={{
                  backgroundColor: "rgba(92, 99,216, 1)",
                  width: 300,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                containerStyle={{ marginTop: 20 }}
              />
		);
	}

	render() {
		return (
			<View style={styles.backgroundContainer}>
				<View style={styles.inputsContatiner}>
					<View style={styles.cardContainer}>
						<Input
							label="Email"
							placeholder="example@email.com"
							onChangeText={this.onEmailChange.bind(this)}
							value={this.props.email}
						/>
					</View>
					<View style={styles.cardContainer}>
						<Input
							secureTextEntry
							label="Password"
							placeholder="password"
							onChangeText={this.onPasswordChange.bind(this)}
							value={this.props.password}
						/>
					</View>
				</View>
				<View style={styles.buttonStyle}>
				<View style={styles.cardContainer}>
						{this.renderError()}
					</View>
				</View>
				<View style={styles.buttonStyle}>
				<View style={styles.cardContainer}>
						{this.renderButton()}
					</View>
				</View>
			</View>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	},
	backgroundContainer: {
		flex: 1,
		backgroundColor: '#2A033E',
		paddingTop: 150,
	},
	inputsContatiner: {
		paddingTop: 10
	},
	buttonStyle: {
		alignItems: 'center'
	},
	cardContainer: {
		padding: 10,
		backgroundColor: '#2A033E',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderRadius: 20,
		position: 'relative'
	}
};

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return {
		email,
		password,
		error,
		loading
	};
};
export default connect(mapStateToProps, {
	emailChanged, passwordChanged, loginUser
})(LoginForm);