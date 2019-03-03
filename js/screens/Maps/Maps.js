import React from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import styles from "./styles";

const Maps = () => {
    return(
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>)
};

export default Maps;
