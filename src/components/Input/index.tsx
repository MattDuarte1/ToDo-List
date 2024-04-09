import { Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";

interface InputProps {
  taskNameHook: {
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
  };
  addTask: () => void;
}

export const Input = ({ taskNameHook, addTask }: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={taskNameHook.taskName}
        onChangeText={(e) => taskNameHook.setTaskName(e)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
      />
      <Pressable
        style={({ pressed }) => [
          {
            ...styles.button,
            backgroundColor: pressed
              ? "#4EA8DE"
              : styles.button.backgroundColor,
            borderRadius: pressed ? 8 : styles.button.borderRadius,
          },
        ]}
        onPress={addTask}
      >
        <Text>
          <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
        </Text>
      </Pressable>
    </View>
  );
};
