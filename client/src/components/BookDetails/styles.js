import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  genre: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  infoCard: {
    backgroundColor: "#D3D3D3",
    borderRadius: 10,
    marginBottom: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  infoRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  synopsisInfoRow: {
    display: "flex",
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
  },
  synopsisInfo: {
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "justify",
  },
});
