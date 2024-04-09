import { FlatList } from "react-native";
import { Tasks } from "../../screens/Home";
import { NotFoundTasks } from "../NotFoundTasks";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: Tasks;
  changeCheckState: (taskId: string) => void;
  onRemoveTask: (taskId: string) => void;
}

export const TaskList = ({
  tasks,
  changeCheckState,
  onRemoveTask,
}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          id={item.id}
          isChecked={item.checked}
          title={item.title}
          onChangeChecked={changeCheckState}
          onRemoveTask={onRemoveTask}
        />
      )}
      ListEmptyComponent={<NotFoundTasks />}
      showsVerticalScrollIndicator={false}
      style={{ width: "100%", height: "63%" }}
    />
  );
};
