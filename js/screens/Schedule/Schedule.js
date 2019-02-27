import React, { Component } from "react";
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Image,
  ScrollView,
  FlatList
} from "react-native";
import styles from "./styles";
import moment from "moment";

const Schedule = props => {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        renderItem={({ item, index }) => (
          <TouchableHighlight
            onPress={e => {
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
export default Schedule;
