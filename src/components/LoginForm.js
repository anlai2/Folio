import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import {
  emailChanged,
  passwordChanged,
  loginUser,
} from '../actions';
import { Input, Spinner } from './common';

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

  onForgotPress = () => {
    Actions.forgotPassword();
  };

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
    return null;
  }

  renderButton() {
    if (this.props.loadingLogin) {
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
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  renderForgotButton() {
    return (
      <TouchableOpacity
        style={{ alignItems: 'center', justifyContent: 'center' }}
        onPress={() => this.onForgotPress()}
      >
        <LinearGradient
          style={styles.loginButtonContainer}
          colors={['#FF5637', '#FF444A', '#FF2D68']}
        >
          <Text style={styles.loginButtonText}>FORGOT PASSWORD</Text>
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
          <View style={styles.cardContainer}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={text => this.onPasswordChange(text)}
              value={this.props.password}
            />
          </View>
        </View>
        <View style={styles.buttonStyle}>
          <View style={styles.cardContainer}>{this.renderError()}</View>
        </View>
        <View style={styles.buttonStyle}>
          <View style={styles.cardContainer}>{this.renderButton()}</View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={styles.forgotButtonStyle}>
            <View style={styles.cardContainer}>
              {this.renderForgotButton()}
            </View>
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
    color: 'red',
  },
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
    email, password, error, loadingLogin,
  } = auth;

  return {
    email,
    password,
    error,
    loadingLogin,
  };
};
export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  },
)(LoginForm);
