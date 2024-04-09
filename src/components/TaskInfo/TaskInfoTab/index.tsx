import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskInfoTabProps {
  title: string;
  titleColor?: string;
  badgeCount: number;
}

export const TaskInfoTab = ({
  title,
  badgeCount,
  titleColor,
}: TaskInfoTabProps) => {
  return (
    <View style={styles.taskInfoTabContainer}>
      <Text
        style={{ ...styles.taskInfoTabText, color: titleColor ?? "#4EA8DE" }}
      >
        {title}
      </Text>
      <View style={styles.taskInfoTabBadge}>
        <Text style={styles.taskInfoTabBadgeText}>{badgeCount}</Text>
      </View>
    </View>
  );
};
