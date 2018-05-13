import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, Spinner } from '../common';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { LinearGradient } from 'expo';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-cointracker-bb394.cloudfunctions.net';

class SignInForm extends Component {
    state = { phone: '', code: '', status: null, loading: false };

    handleSubmit = async () => {
        // Create User w/ Phone Number
        // Second Request runs even if first request was failed
        // With aync/await, requests are only ran if previous requests finished
        try {
            this.setState({ loading: true })
            await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone })
            // Send OTP Code to Phone Number
            await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
            this.setState({ status: 'Code Sent' })
            this.setState({ loading: false })
        } catch (err) {
            this.setState({ loading: false })
            this.setState({ status: 'False Input or Phone # Already Exists' })
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
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner size="large" />
                </View>
            );
        }

        return (
            <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => this.handleSubmit()}
            >
                <LinearGradient
                    style={styles.loginButtonContainer}
                    colors={['#FF5637', '#FF444A', '#FF2D68']}>
                    <Text style={styles.loginButtonText}>SIGN UP</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }


    render() {
        return (
            <View style={styles.inputsContatiner}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text
                        style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}
                    >
                        Sign Up with Phone Number
                    </Text>
                </View>
                <View style={styles.cardContainer}>
                    <Input
                        label="Phone #"
                        placeholder="123-456-7890"
                        value={this.state.phone}
                        onChangeText={phone => this.setState({ phone })}
                    />
                </View>
                {this.renderButton()}
                {this.renderStatus()}
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
        paddingTop: 10,
        backgroundColor: '#FFF'
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

export default SignInForm;