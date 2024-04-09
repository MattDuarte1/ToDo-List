import { Text, TextInput, Pressable, View } from 'react-native'
import { styles } from './styles'
import AntDesign  from '@expo/vector-icons/AntDesign'

export const Input = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor="#808080"/>
      <Pressable style={({pressed}) => [
        {
          ...styles.button,
          backgroundColor: pressed ? '#4EA8DE' : styles.button.backgroundColor,
          borderRadius: pressed ? 8 : styles.button.borderRadius
        }
      ]} onPress={() => {}}>
        <Text>
          <AntDesign name='pluscircleo' size={16} color="#F2F2F2" />
        </Text>
      </Pressable>

    </View>
  )
}