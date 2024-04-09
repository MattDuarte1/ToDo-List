import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';


SplashScreen.preventAutoHideAsync();

export const Home = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('../../../assets/fonts/inter-regular.otf'),
    'Inter-Bold': require('../../../assets/fonts/inter-bold.otf')
  });


  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Header />
      <View style={styles.content}>
       <Input />
      </View>
    </View>
  )
}