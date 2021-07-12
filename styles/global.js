import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    // borderColor: "blue",
    // borderWidth: 2,
    backgroundColor: "#7a5b52",
    flex: 1,
  },
  titleText: {
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20,
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 10,
  },
  contentText: {
    fontFamily: "TitilliumWeb-Regular",
    fontSize: 20 * 0.75,
    color: "#ffffff",
    marginTop: 10,
    marginBottom: 10,
  },
  tabBarLabel: {
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
    color: "#ffffff",
  },
  customButtonView: {
    backgroundColor: "#e0d4d1",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  customButtonText: {
    fontFamily: "TitilliumWeb-Bold",
    fontSize: 20 * 0.75,
  },
});
