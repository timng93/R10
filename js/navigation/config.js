import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 100, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft: Platform.select({
    android:
      navigation.state.routeName !== "Session" ? (
        <Ionicons
          style={{ paddingLeft: 10 }}
          size={25}
          name="md-menu"
          color="#fff"
          onPress={() => navigation.toggleDrawer()}
        />
      ) : (
        <Ionicons
          style={{ paddingLeft: 10 }}
          size={25}
          color="#fff"
          name="md-arrow-back"
          onPress={() => navigation.pop()}
        />
      )
  })
});
