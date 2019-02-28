import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20
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
  linearGradient: {
  margin: 15,
  borderRadius: 25,
  padding: 5,
  },
  buttonText: {
      textTransform: 'uppercase',
      textAlign: 'center'

  },
  items: {
    padding: 8
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: "700"
  },
  icon: {
    color: "red"
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  }
});

export default styles;
