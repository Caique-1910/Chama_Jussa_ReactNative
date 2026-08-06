import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from "../chamajussa/src/pages/login/Login";
import { Listagem } from './src/pages/listagem/Listagem';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat"
import Detalhes from './src/pages/detalhes/Detalhes';

export default function App() {

  const[loaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  })

  if(!loaded){
    return null
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeareaview}>
        <StatusBar style='dark'/>
        {/* <Login /> */}
        {/* <Listagem/> */}
        <Detalhes/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
    fontFamily: 'Monstserrat_Regular400'
  },
});
