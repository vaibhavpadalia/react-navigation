import { Text, View, Image } from 'react-native';
import React, { Component } from 'react';

class Dashboard extends Component {
  static navigationOptions = {
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 30, marginBottom: 30 }}>Dashboard Page</Text>
        <Image style={{ height: 200, width: 200 }} resizeMode={"contain"} source={require("../images/LoginLogo.png")} />
      </View>
    );
  }
}

export default Dashboard;
