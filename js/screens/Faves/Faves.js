import React from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Platform } from "react-native";

const getTypedIcon = name => {
  return Platform.OS === "ios" ? `ios-${name}` : `md-${name}`;
};

const Faves = props => {
  console.log(props);

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={props.data}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {moment(section.title).format("LT")}
          </Text>
        )}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("Session", {
                session: item
              });
            }}
            activeOpacity={0.5}
            underlayColor={"#e6e6e6"}
          >
            <View style={styles.items} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{item.location}</Text>
                {props.faveIds.find(fave => fave === item.id) && (
                  <Ionicons
                    style={styles.icon}
                    size={17}
                    name={getTypedIcon("heart")}
                  />
                )}
              </View>
            </View>
          </TouchableHighlight>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
      />
    </View>
  );
};
export default Faves;
