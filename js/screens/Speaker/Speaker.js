import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  LinearGradient,
  Linking,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Platform
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import GradientButton from "../../components/GradientButton";
const Speaker = props => {
  console.log(props.speaker);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.headerContainer}>
          <TouchableHighlight
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Ionicons
              style={styles.icon}
              size={30}
              color="#fff"
              name="ios-close"
            />
          </TouchableHighlight>
          <Text style={styles.speaker}>About the Speaker</Text>
        </View>

        <View style={styles.info}>
          <View style={styles.speakerContainer}>
            <Image style={styles.image} source={{ uri: props.speaker.image }} />
            <Text style={styles.title}>{props.speaker.name}</Text>
          </View>
          <Text style={styles.description}>{props.speaker.bio}</Text>
          <Button
            onPress={() => Linking.openURL(`${props.speaker.url}`)}
            title="Learn More on Wikipedia"
            color="#841584"
            accessibilityLabel="Learn more about this speaker on Wikipedia"
          />
        
          
          
        </View>
      </View>
    </ScrollView>
  );
};

export default Speaker;
