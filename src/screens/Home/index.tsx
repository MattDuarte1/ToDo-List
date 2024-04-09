import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <TextInput placeholder='Adicione uma nova tarefa'/>
      </View>
    </View>
  )
}