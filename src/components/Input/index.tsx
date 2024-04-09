import { Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

interface InputProps {
  taskNameHook: {
    taskName: string;
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
  };
  addTask: () => void;
}

export const Input = ({ taskNameHook, addTask }: InputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => setIsFocused((prevState) => !prevState);

  const handleBlur = () => setIsFocused((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? "#5E60CE" : "transparent",
            borderWidth: 1,
          },
        ]}
        value={taskNameHook.taskName}
        onChangeText={(e) => taskNameHook.setTaskName(e)}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        cursorColor="#F2F2F2"
        onFocus={handleFocus}
        onBlur={handleBlur}
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
