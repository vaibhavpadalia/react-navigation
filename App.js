import React, { Component } from "react";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import Dashboard from "./src/components/Dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#173746" },
      headerTitleStyle: { color: 'white' },
    }}>
      <AuthStack.Screen name={"Test App"} component={TabsScreen} />
      <AuthStack.Screen name={"Dashboard"} component={Dashboard} options={{ headerTintColor: "white" }} />
    </AuthStack.Navigator>
  );
};


const TabsScreen = () => {
  return (
    <Tabs.Navigator tabBarOptions={{ activeTintColor: "white", style: { backgroundColor: "#173746" } }} >
      <Tabs.Screen name={"Login"} component={Login} />
      <Tabs.Screen name={"Signup"} component={Signup} />
    </Tabs.Navigator >
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Authentication Stack"} component={AuthStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;