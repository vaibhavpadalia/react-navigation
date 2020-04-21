import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 30, marginBottom: 30 }}>Home Page</Text>
        <Image resizeMode={"contain"} source={require("../images/SignupLogo.png")}
          style={{ height: 200, width: 200, flexDirection: "row" }} />
      </View>
    );
  }
}

export default Home;
