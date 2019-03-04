import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import AboutScreen from "../screens/About";
import MapScreen from "../screens/Map";
import FavesScreen from "../screens/Faves";
import ScheduleScreen from "../screens/Schedule";
import SessionScreen from "../screens/Session";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import { Dimensions } from "react-native";
import globalStyles from "../config/styles";

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createDrawerNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    drawerWidth: Dimensions.get("window").width / 2,

    defaultNavigationOptions: ({ navigation }) => ({
      drawerIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `md-calendar`;
        } else if (routeName === "Map") {
          iconName = `md-map`;
        } else if (routeName === "Faves") {
          iconName = `md-heart`;
        } else if (routeName === "About") {
          iconName = `md-information-circle`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    contentOptions: {
      activeTintColor: "#9963ea",
      inactiveTintColor: "#999999",
      labelStyle: {
        ...globalStyles.fonts,
        fontWeight: "900",
        fontSize: 17
      }
    }
  }
);
