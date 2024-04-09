import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskInfoTabContainer: {
    flexDirection: "row",
    maxWidth: 97,
    width: "100%",
    gap: 8,
    alignItems: "center",
  },
  taskInfoTabText: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  taskInfoTabBadge: {
    borderRadius: 999,
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 7,
  },
  taskInfoTabBadgeText: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    color: "#D9D9D9",
  },
});
