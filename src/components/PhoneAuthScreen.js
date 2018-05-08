import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './common/SignUpForm';
import SignInForm from './common/SignInForm';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SignUpForm />
                <View style={{ height: 75 }} />
                <SignInForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A033E',
        justifyContent: 'space-around'
    },
});