import React, { Component } from "react";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import { TouchableOpacity } from "react-native";
import Dashboard from "./src/components/Dashboard";
import { Icon } from "react-native-elements";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react/navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();


const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={"Tab"} component={Tabs} />
      <AuthStack.Screen name={"Dashboard"} component={Dashboard} />
    </AuthStack.Navigator>
  );
};


const TabsScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name={"Login"} component={Login} />
      <Tabs.Screen name={"Signup"} component={Signup} />
    </Tabs.Navigator>
  );
};



// const tabNav = TabNavigator(
//   {
//     Login: { screen: Login },
//     Signup: { screen: Signup }
//   },
//   {
//     tabBarPosition: "bottom",
//     tabBarOptions: {
//       style: {
//         backgroundColor: "#173746"
//       }
//     },
//     lazyLoad: true
//   }
// );

// const stackNav = StackNavigator({
//   Tab: { screen: tabNav },
//   Dashboard: {
//     screen: Dashboard,
//     navigationOptions: ({ navigation }) => ({
//       title: "Dashboard",
//       headerTitleStyle: { color: "white" },
//       headerTintColor: "white",
//       headerLeft: (
//         <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
//           <Icon name="menu" size={30} color="white" />
//         </TouchableOpacity>
//       ),
//       headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: "#173746" }
//     })
//   }
// });

// const App = DrawerNavigator({
//   Home: { screen: stackNav }
// });

export default App;
