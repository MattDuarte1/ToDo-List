import { View } from "react-native";
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
  const [tasks, setTasks] = useState<Tasks>([
    {
      id: "1",
      title: "Tarefa 1",
      checked: false,
    },
    {
      id: "2",
      title: "Tarefa 2",
      checked: false,
    },
    {
      id: "3",
      title: "Tarefa 3",
      checked: false,
    },
    {
      id: "4",
      title: "Tarefa 4",
      checked: false,
    },
    {
      id: "5",
      title: "Tarefa 5",
      checked: false,
    },
    {
      id: "6",
      title: "Tarefa 6",
      checked: true,
    },
    {
      id: "7",
      title: "Tarefa 7",
      checked: true,
    },
    {
      id: "8",
      title: "Tarefa 8",
      checked: true,
    },
    {
      id: "9",
      title: "Tarefa 9",
      checked: false,
    },
    {
      id: "10",
      title: "Tarefa 10",
      checked: false,
    },
  ]);
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

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <View style={styles.content}>
        <Input />

        <TaskInfoCountResult
          completedTasksQuantity={completedTasksQuantity}
          totalTasksQuantity={tasks.length}
        />

        <TaskList tasks={tasks} />
      </View>
    </View>
  );
};
