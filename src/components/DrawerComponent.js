import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const DrawerComponent = (props) => {
  return (
    <DrawerContentScrollView contentContainerStyle={{ alignItems: "center" }}>
      <Image source={require("../images/bat.png")} style={{ height: 150, width: 150 }} />
      <TouchableOpacity onPress={() => props.navigation.navigate("Dashboard")}>
        <Text>{"Dashboard"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
        <Text>{"Home"}</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default DrawerComponent;