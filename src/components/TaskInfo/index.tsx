import { Text, View } from "react-native";
import { styles } from "./styles";
import { TaskInfoTab } from "./TaskInfoTab";

export const TaskInfoCountResult = () => {
  return (
    <View style={styles.taskInfoWrapper}>
      <TaskInfoTab title="Criadas" badgeCount={0} />
      <TaskInfoTab title="Concluídas" titleColor="#8284FA" badgeCount={0} />
    </View>
  );
};
