import Checkbox from "expo-checkbox";
import Feather from "@expo/vector-icons/Feather";
import { Text, View, Pressable } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface TaskItemProps {
  id: string;
  title: string;
  isChecked: boolean;
  onChangeChecked: (taskId: string) => void;
}

export const TaskItem = ({
  isChecked = false,
  title,
  id,
  onChangeChecked,
}: TaskItemProps) => {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        color={isChecked ? "#5E60CE" : undefined}
        onValueChange={() => {
          onChangeChecked(id);
        }}
      />
      <Text
        style={[
          styles.title,
          {
            textDecorationLine: isChecked ? "line-through" : "none",
            color: isChecked ? "#808080" : styles.title.color,
          },
        ]}
      >
        {title}
      </Text>

      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => {
          console.log("clicou");
        }}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#333333" : "transparent" },
        ]}
      >
        <Text>
          <Feather
            name="trash-2"
            size={14}
            color={pressed ? "red" : "#808080"}
          />
        </Text>
      </Pressable>
    </View>
  );
};
