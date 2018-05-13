import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Input, Spinner } from '../common';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-cointracker-bb394.cloudfunctions.net/';

class SignInForm extends Component {
    state = { phone: '', code: '', status: '', loading: false };

    handleSubmit = async () => {
        try {
            this.setState({ loading: true })
            let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone, code: this.state.code
            });
            firebase.auth().signInWithCustomToken(data.token);
            Actions.main()
        } catch (err) {
            this.setState({ loading: false })
            this.setState({ status: 'Incorrect Code or Phone #' })
        }
    }

    renderStatus() {
        if (this.state.status !== null) {
            return (
                <View style={styles.statusContainer}>
                    <Text style={styles.statusTextStyle}>
                        {this.state.status}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.state.loading) {
            return (
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Spinner size="large" />
            </View>
            )
        }

        return (
            <TouchableOpacity
				style={{ alignItems: 'center', justifyContent: 'center' }}
				onPress={() => this.handleSubmit()}
			>
				<LinearGradient
					style={styles.loginButtonContainer}
					colors={['#FF5637', '#FF444A', '#FF2D68']}>
					<Text style={styles.loginButtonText}>LOGIN</Text>
				</LinearGradient>
			</TouchableOpacity>
        );
    }


    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}
                    >
                        Sign In with Phone Number
                    </Text>
                </View>
                <View style={styles.inputsContatiner}>
                    <View style={styles.cardContainer}>
                        <Input
                            label="Phone #"
                            placeholder="123-456-7890"
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </View>
                    <View style={styles.cardContainer}>
                        <Input
                            secureTextEntry
                            label="Code"
                            placeholder="1234"
                            value={this.state.code}
                            onChangeText={code => this.setState({ code })}
                        />
                    </View>
                </View>
                {this.renderButton()}
            </View>
        );
    }
}

const styles = {
    statusContainer: {
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    backgroundContainer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    inputsContatiner: {
        paddingTop: 10
    },
    buttonStyle: {
        alignItems: 'center'
    },
    cardContainer: {
        padding: 10,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderRadius: 20,
        position: 'relative'
    },
    loginButtonContainer: {
		justifyContent: 'center',
		backgroundColor: 'transparent',
		alignItems: 'center',
		width: 300,
		height: 45,
		padding: 15,
		borderRadius: 20,
		shadowOffset: { width: 3, height: 3, },
		shadowColor: 'black',
		shadowOpacity: 0.2,
	},
	loginButtonText: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'white',
	}
};
//             <View>
//                 <View style={{ marginBottom: 10 }}>
//                     <FormLabel>Enter Phone Number</FormLabel>
//                     <Input
//                         value={this.state.phone}
//                         onChangeText={phone => this.setState({ phone })}
//                     />
//                 </View>

//                 <View style={{ marginBottom: 10 }}>
//                     <FormLabel>Enter Code</FormLabel>
//                     <Input
//                         value={this.state.code}
//                         onChangeText={code => this.setState({ code })}
//                     />
//                 </View>
//                 <Button onPress={this.handleSubmit} title="Submit" />
//             </View>
//         )
//     }
// }

export default SignInForm;