import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#000",
    height: Dimensions.get("window").height
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    paddingTop: 45,
    paddingLeft: 30
  },
  speaker: {
    fontSize: 18,
    fontFamily: "Montserrat",
    paddingTop: 45,
    color: "#fff",
    paddingLeft: 60
  },
  info: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height - 100,
    margin: 15,
    borderRadius: 10
  },

  image: {
    height: 120,
    width: 120,
    borderRadius: 55,
    left: "35%",
    marginTop: 30
  },
  title: {
    fontSize: 30,
    paddingTop: 15,
    fontWeight: "600",
    fontFamily: "Montserrat",
    textAlign: "center"
  },
  description: {
    fontSize: 18,
    paddingTop: 15,
    padding: 10,
    fontWeight: "300",
    fontFamily: "Montserrat"
  }
});

export default styles;
