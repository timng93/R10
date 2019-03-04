import React from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Linking,
  ScrollView,
  Image
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import GradientButton from "../../components/GradientButton";
import styles from "./styles";
import PropTypes from "prop-types";

const Speaker = ({ speaker, navigation }) => (
  <View style={styles.background}>
    <View style={styles.headerContainer}>
      <TouchableHighlight
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons style={styles.icon} name="ios-close" size={30} color="#fff" />
      </TouchableHighlight>
      <Text style={styles.speaker}>About the Speaker</Text>
      <View />
    </View>

    <View style={styles.info}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.speakerContainer}>
          <Image style={styles.image} source={{ uri: speaker.image }} />
          <Text style={styles.title}>{speaker.name}</Text>
        </View>
        <Text style={styles.description}>{speaker.bio}</Text>
        <GradientButton
          buttonPress={() => Linking.openURL(speaker.url)}
          title="Read More On Wikipedia"
        />
      </ScrollView>
    </View>
  </View>
);

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default Speaker;
