import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 64,
    borderRadius: 8,
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,

    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,
  },
  checkbox: {
    borderRadius: 999,
    width: 17.45,
    height: 17.45,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
    marginRight: 3,
  },
  title: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: "#F2F2F2",
    flex: 1,
  },
  button: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    color: "#808080",
  },
});
