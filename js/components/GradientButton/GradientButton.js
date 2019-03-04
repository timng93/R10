import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const GradientButton = ({ title, buttonPress }) => (
  <TouchableOpacity style={styles.buttonPress} onPress={buttonPress}>
    <LinearGradient
      style={styles.gradient}
      colors={["#8797D6", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
    >
      <Text style={styles.buttonTitle}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

GradientButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonPress: PropTypes.func.isRequired
};

export default GradientButton;
