import { StyleSheet, Platform } from "react-native";

const globalStyles = StyleSheet.create({
  fonts: {
    ...Platform.select({
      ios: {
        fontFamily: "Montserrat-Light"
      },
      android: {
        fontFamily: "Montserrat-Regular"
      }
    })
  }
});

export default globalStyles;
