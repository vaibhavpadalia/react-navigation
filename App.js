import React, { Component } from "react";
import { Image, View, Text } from "react-native";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import Dashboard from "./src/components/Dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerComponent from "./src/components/DrawerComponent";
import Home from "./src/components/Home";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#173746" },
      headerTitleStyle: { color: 'white' },
      headerTintColor: "white"
    }}>
      <AuthStack.Screen name={"Test App"} component={TabsScreen} />
      <AuthStack.Screen name={"Dashboard"} component={Dashboard} />
      <AuthStack.Screen name={"Home"} component={Home} />
    </AuthStack.Navigator>
  );
};


const TabsScreen = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{ activeTintColor: "white", style: { backgroundColor: "#173746" } }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size, tintColor }) => {
          let iconName, badgeCount;
          if (route.name === 'Login') {
            iconName = require("./src/images/login.png");
            badgeCount = 2;
          } else if (route.name === 'Signup') {
            iconName = require("./src/images/signup.png");
            badgeCount = 5;
          }
          return (
            <View style={{ width: 24, height: 24, margin: 5 }}>
              <Image source={iconName} style={{ height: 25, width: 25, tintColor: tintColor }} />
              {badgeCountView(badgeCount)}
            </View>);
        },
      })} >
      <Tabs.Screen name={"Login"} component={Login} />
      <Tabs.Screen name={"Signup"} component={Signup} />
    </Tabs.Navigator >
  );
};

const badgeCountView = (badgeCount) => {
  return (
    <View>
      {badgeCount > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -10,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 15,
            height: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 13, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />}>
        <Drawer.Screen name={"Authentication Stack"} component={AuthStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
