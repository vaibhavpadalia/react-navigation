import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

class Dashboard extends Component {

  logout = () => {
    // store.loggedIn(false);
  };

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ marginTop: 30, marginBottom: 30 }}>Dashboard Page</Text>
        <Image style={{ height: 200, width: 200 }} resizeMode={"contain"} source={require("../images/LoginLogo.png")} />
        <TouchableOpacity style={{ margin: 20, backgroundColor: "cyan" }} onPress={() => this.props.navigation.openDrawer()}>
          <Text style={{ margin: 10 }}>{"Open Drawer"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 20, backgroundColor: "cyan" }} onPress={() => this.logout()}>
          <Text style={{ margin: 10 }}>{"Logout"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Dashboard;
