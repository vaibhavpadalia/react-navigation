import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TextInput } from 'react-native';

class Signup extends Component {
  state = {
    email: '',
    password: ''
  };

  emailValidation = () => {
    if (this.state.email.length === 0) {
      return <Text style={{ color: "red" }}>Email address is required</Text>;
    } else {
      return null;
    }
  };

  passwordValidation = () => {
    if (this.state.password.length === 0) {
      return <Text style={{ color: "red" }}>Password is required</Text>;
    } else {
      return null;
    }
  };

  signup = () => {
    const { store } = this.props;
    store.loggedIn(true);
    navigate("Dashboard");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView keyboardShouldPersistTaps="always" style={{ margin: 10 }}>
        <View style={styles.container}>
          <Text>Email:</Text>
          <TextInput style={styles.textInput} placeholder="Enter email" onChangeText={(text) => this.setState({ email: text })} />
          {this.emailValidation()}
          <Text>Password:</Text>
          <TextInput style={styles.textInput} placeholder="Enter password" onChangeText={(text) => this.setState({ password: text })}
          />
          {this.passwordValidation()}
          <View style={styles.submitStyle}>
            <Button title="SIGN UP" onPress={() => this.signup()} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20
  },
  submitStyle: {
    marginTop: 30
  },
  textInput: {
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5
  }
});

export default Signup;
