import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export const NotFoundTasks = () => {
  return (
    <>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/clipboard.png")}
          width={56}
          height={56}
        />
        <Text style={styles.descriptionOne}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.descriptionTwo}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </>
  );
};
