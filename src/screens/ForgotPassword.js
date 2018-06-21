import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import {
  emailChanged,
  forgotPassword,
} from '../actions';
import { Input, Spinner } from '../components/common';

class ForgotPassword extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onButtonPress() {
    const { email } = this.props;

    this.props.forgotPassword(email);
  }

  renderButton() {
    if (this.props.loadingForgot) {
      return <Spinner size="large" />;
    }

    return (
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={() => this.onButtonPress()}
      >
        <LinearGradient
          style={styles.loginButtonContainer}
          colors={['#FF5637', '#FF444A', '#FF2D68']}
        >
          <Text style={styles.loginButtonText}>SEND RESET LINK</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.inputsContainer}>
          <View style={styles.cardContainer}>
            <Input
              label="Email"
              placeholder="example@email.com"
              onChangeText={text => this.onEmailChange(text)}
              value={this.props.email}
            />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <View style={styles.cardContainer}>{this.renderButton()}</View>
        </View>
      </View>
    );
  }
}

const styles = {
  backgroundContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputsContainer: {
    paddingTop: 10,
  },
  buttonStyle: {
    alignItems: 'center',
  },
  cardContainer: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: 20,
    position: 'relative',
  },
  loginButtonContainer: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    width: 300,
    height: 45,
    padding: 15,
    borderRadius: 20,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.2,
  },
  loginButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  forgotButtonStyle: {
    alignItems: 'center',
    height: 100,
  },
};

const mapStateToProps = ({ auth }) => {
  const {
    email, error, loadingForgot,
  } = auth;

  return {
    email,
    error,
    loadingForgot,
  };
};
export default connect(
  mapStateToProps,
  {
    emailChanged,
    forgotPassword,
  },
)(ForgotPassword);
