import React, { Component } from "react";
import { Text, View, SectionList, Image, ScrollView, FlatList } from "react-native";
import styles from "./styles";

const Schedule = props => {
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        renderItem={({ item, index }) => (
          <View style={styles.items} key={index}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.locationView}>
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        )}
        sections={props.data}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};
export default Schedule;
