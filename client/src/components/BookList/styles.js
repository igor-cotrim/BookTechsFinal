import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listItem: {
    borderRadius: 10,
    margin: 10,
    padding: 0,
    flexDirection: "column",
  },
  avatarContainer: {
    alignSelf: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    width: "100%",
  },
  content: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
  },
});
