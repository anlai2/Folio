import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';
import LoginForm from './LoginForm'

import LOGO from '../../assets/folio.png';


export default class IntroScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        /> */}
        <View style={styles.introContainer}>
          <Image
            source={LOGO}
            style={styles.logo}
          />
        </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={Actions.phoneAuth}
          >
            <Text style={styles.button}> Login with Phone Number </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 1 }} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={Actions.loginUser}
          >
            <Text style={styles.button}> Login </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Actions.createUser}
          >
            <Text style={styles.button}> Signup </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  introContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'cover',
    width: 400,
    height: 400,
    marginBottom: 10

  },
  buttonContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#FF5636',
  },
  button: {
    fontSize: 20,
    color: 'white',
  }
});
