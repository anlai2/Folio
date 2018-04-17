import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';
import LoginForm from './LoginForm'

import LOGO from '../../assets/moonshot.gif';


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
          <Text style={{
            fontSize: 30,
            fontWeight: '700',
            color: 'white'}}>MOONSHOT       </Text>
          
        </View>
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
    backgroundColor: '#2A033E',
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
    height: 300,
    marginBottom: 10
    
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 60,
    width: '100%',    
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'rgba(92, 99,216, 1)',
  },
  button: {
    fontSize: 20,
    color: 'white',
  }
});
