import { FlatList } from "react-native";
import { Tasks } from "../../screens/Home";
import { NotFoundTasks } from "../NotFoundTasks";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks?: Tasks;
}

export const TaskList = ({ tasks = [] }: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem isChecked={item.checked} title={item.title} />
      )}
      ListEmptyComponent={<NotFoundTasks />}
      showsVerticalScrollIndicator={false}
      style={{ width: "100%", height: "63%" }}
    />
  );
};
