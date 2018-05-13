import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
  },
});
