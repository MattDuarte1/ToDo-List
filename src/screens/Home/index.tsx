import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
       <Input />
      </View>
    </View>
  )
}