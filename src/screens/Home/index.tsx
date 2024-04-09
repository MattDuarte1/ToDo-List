import { Alert, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { TaskInfoCountResult } from "../../components/TaskInfo";
import { TaskList } from "../../components/TaskList";

SplashScreen.preventAutoHideAsync();

export type Tasks = {
  id: string;
  title: string;
  checked: boolean;
}[];

export const Home = () => {
  const [tasks, setTasks] = useState<Tasks>([]);
  const [taskName, setTaskName] = useState<string>("");

  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../../../assets/fonts/inter-regular.otf"),
    "Inter-Bold": require("../../../assets/fonts/inter-bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const completedTasksQuantity = tasks.filter((task) => task.checked).length;

  const handleCreateTask = () => {
    if (tasks.find((task) => task.title === taskName)) {
      return Alert.alert("Tarefa", "Essa tarefa já existe!.");
    }

    setTasks((prevState) => [
      ...prevState,
      {
        id: String(prevState.length + 1),
        title: taskName,
        checked: false,
      },
    ]);

    setTaskName("");
  };

  const taskNameHook = {
    taskName,
    setTaskName,
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <View style={styles.content}>
        <Input taskNameHook={taskNameHook} addTask={handleCreateTask} />

        <TaskInfoCountResult
          completedTasksQuantity={completedTasksQuantity}
          totalTasksQuantity={tasks.length}
        />

        <TaskList tasks={tasks} />
      </View>
    </View>
  );
};
