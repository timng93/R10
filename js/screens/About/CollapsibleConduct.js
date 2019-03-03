import React, { Component } from "react";
import {
  Text,
  View,
  LayoutAnimation,
  Animated,
  Platform,
  TouchableOpacity,
  UIManager
} from "react-native";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";

class CollapsibleConduct extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      isOpen: false,
      rotateValue: new Animated.Value(0.05)
    };
  }

  animateSpin = () => {
    this.state.rotateValue.setValue(0);
    Animated.timing(this.state.rotateValue, {
      duration: 600,
      toValue: 360
    }).start();
  };

  toggle = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: !this.state.isOpen });
    this.animateSpin();
  };

  render() {
    const { item } = this.props;
    const rotateIcon = this.state.rotateValue.interpolate({
      inputRange: ["0", "360"],
      outputRange: ["0deg", "360deg"]
    });

    return (
      <View style={styles.flatList}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            this.toggle();
          }}
        >
          {this.state.isOpen ? (
            <View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Animated.View
                    style={{ transform: [{ rotate: rotateIcon }] }}
                  >
                    {Platform.OS === "ios" ? (
                      <Ionicons
                        name={"ios-remove"}
                        style={styles.bullet}
                        size={20}
                      />
                    ) : (
                      <Ionicons
                        name={"md-remove"}
                        style={styles.bullet}
                        size={20}
                      />
                    )}
                  </Animated.View>
                </View>
                <Text style={styles.listTitle}>{item.title}</Text>
              </View>

              <Text style={styles.description}>{item.description}</Text>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <View>
                <Animated.View style={{ transform: [{ rotate: rotateIcon }] }}>
                  {Platform.OS === "ios" ? (
                    <Ionicons
                      name={"ios-add"}
                      style={styles.bullet}
                      size={20}
                    />
                  ) : (
                    <Ionicons
                      name={"md-add"}
                      style={styles.bullet}
                      size={20}
                    />
                  )}
                </Animated.View>
              </View>
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default CollapsibleConduct;
