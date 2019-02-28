import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    fontFamily: "Montserrat-Regular"
  },
  header: {
    backgroundColor: "#e6e6e6",
    padding: 5,
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase"
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    fontSize: 17,
    fontWeight: "200"
  },
  icon: {
    color: "#cf392a"
  },
  title: {
    fontSize: 30,
    paddingTop: 15,
    fontWeight: "600"
  },
  time: {
    fontSize: 17,
    color: "#cf392a",
    paddingTop: 15,
    textTransform: "uppercase",
    fontWeight: "600"
  },
  description: {
    fontSize: 20,
    paddingTop: 15
  },
  presenter: {
    fontSize: 20,
    fontWeight: "200",
    paddingTop: 15
  },
  speakerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 15
  },
  linearGradient: {
    margin: 15,
    borderRadius: 25,
    padding: 5
  },
  buttonText: {
    textTransform: "uppercase",
    textAlign: "center"
  },
  items: {
    padding: 8
  },
  icon: {
    color: "red"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 27
  },
  name: {
    marginTop: 19,
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 16
  },
  itemSeparator: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginTop: 15
  }
});

export default styles;
