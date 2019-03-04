import { StyleSheet, Platform } from "react-native";
import globalStyles from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  location: {
    fontSize: 17,
    fontWeight: "200",
    color: '#999999',
    ...globalStyles.fonts
  },
  icon: {
    color: "#cf392a"
  },
  title: {
    fontSize: 30,
    paddingTop: 15,
    fontWeight: "600",
    ...globalStyles.fonts
  },
  time: {
    fontSize: 15,
    color: "#cf392a",
    paddingTop: 15,
    fontWeight: "600",
    ...globalStyles.fonts,
    ...Platform.select({
      ios: {
        textTransform: "uppercase"
      }
    })
  },
  description: {
    fontSize: 20,
    paddingTop: 15,
    ...globalStyles.fonts
  },
  presenter: {
    fontSize: 20,
    fontWeight: "200",
    paddingTop: 15,
    ...globalStyles.fonts,
    color: '#999999'
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
    fontSize: 16,
    ...globalStyles.fonts
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    ...globalStyles.fonts
  },
  itemSeparator: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginTop: 15
  }
});

export default styles;
