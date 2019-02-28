import React from "react";
import { Text, View, SectionList, TouchableHighlight } from "react-native";
import styles from "./styles";
import moment from "moment";
import Ionicons from "react-native-vector-icons/Ionicons";

const Faves = props => {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            onPress={() => {
              props.navigation.navigate("Session", {
                session: item
              });
            }}
          >
            <View style={styles.items} key={index}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.locationView}>
                <Text style={styles.location}>{item.location}</Text>
              </View>
              {props.faveIds.find(fave => fave === item.id) && (
                <Ionicons style={styles.icon} name={"ios-heart"} />
              )}
            </View>
          </TouchableHighlight>
        )}
        sections={props.data}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>
            {moment(section.title).format("h:mm a")}
          </Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};
export default Faves;
