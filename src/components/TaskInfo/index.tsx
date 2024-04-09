import { Text, View } from "react-native";
import { styles } from "./styles";
import { TaskInfoTab } from "./TaskInfoTab";

interface TaskInfoCountResultProps {
  completedTasksQuantity?: number;
  totalTasksQuantity?: number;
}

export const TaskInfoCountResult = ({
  completedTasksQuantity = 0,
  totalTasksQuantity = 0,
}: TaskInfoCountResultProps) => {
  return (
    <View style={styles.taskInfoWrapper}>
      <TaskInfoTab title="Criadas" badgeCount={totalTasksQuantity} />
      <TaskInfoTab
        title="Concluídas"
        titleColor="#8284FA"
        badgeCount={completedTasksQuantity}
      />
    </View>
  );
};
