import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const DrawerComponent = (props) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image source={require("../images/bat.png")} style={{ height: 150, width: 150 }} />
      <TouchableOpacity onPress={() => props.navigation.navigate("Dashboard")}>
        <Text>{"Dashboard"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>{"Home"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerComponent;