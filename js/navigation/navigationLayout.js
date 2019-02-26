import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import AboutScreen from "../screens/About";
import MapsScreen from "../screens/Maps";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import Ionicons from "react-native-vector-icons/Ionicons";

const ScheduleStack = createStackNavigator({
  Schedule: ScheduleScreen,
  Session: SessionScreen
});

const MapsStack = createStackNavigator({
  Maps: MapsScreen
});

const FavesStack = createStackNavigator({
  Faves: FavesScreen,
  Session: SessionScreen
});

const AboutStack = createStackNavigator({
  About: AboutScreen
});

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapsStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
  
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#999",
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: "#000"
      }
    }
  }
);
