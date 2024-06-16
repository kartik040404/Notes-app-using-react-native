import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native"

import { Colors } from "react-native/Libraries/NewAppScreen"
import MainNavigator from "./assets/Navigation/MainNavigator"


const App1=()=> {
//   const isDarkMode = useColorScheme() === "dark"
//   //  const function=()=>{
//   //  return console.warn('Button Clicked');
//   // }

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
//   }

  return (
   <MainNavigator/>

  );
}


export default App1
