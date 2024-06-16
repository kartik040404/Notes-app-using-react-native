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

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (

//     <View style={{}}>
//       <Text>Hello World</Text>
//     </View>
//   );
// }

function App() {
  const isDarkMode = useColorScheme() === "dark"
  //  const function=()=>{
  //  return console.warn('Button Clicked');
  // }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }

  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      {/* Login-start */}
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {/* <LinearGradient colors={['white', 'lightblue',]}
         start={{ x: 0, y: 1 }}
         end={{ x: 1, y: 0 }}
        > */}

        <Text style={style.login}>Login</Text>
        {/* </LinearGradient> */}
      </View>
      {/* Login-end */}

      {/* Username-start */}
      <View style={{ flexDirection: "row" }}>
        <Text style={style.text1}>Username</Text>

        <TextInput style={style.input} placeholder="Enter Username"></TextInput>
      </View>
      {/* Username-end */}

      {/* Password-start */}
      <View style={{ flexDirection: "column", marginTop: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={style.text1}>Password</Text>
          <TextInput
            style={[style.input, { marginLeft: 12 }]}
            placeholder="Enter Password"
            secureTextEntry={true}
          ></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {
            console.warn("Forgot Password")
          }}
        >
          <Text style={{ marginLeft: 235, marginTop: 10, fontWeight: "bold" }}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      {/* Password-end */}

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <TouchableOpacity
          style={style.TouchableOpacity1}
          onPress={() => {
            console.warn("Successfully Login")
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

      {/* NewHere-start */}
      <TouchableOpacity
        onPress={() => {
          console.warn("SignUp")
        }}
      >
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>New Here?</Text>
        </View>
      </TouchableOpacity>
      {/* NewHere-end */}
    </View>
  )
}

const style = StyleSheet.create({
  input: {
    backgroundColor: "lightblue",
    width: 200,
    marginLeft: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1
  },
  text1: {
    color: "black",
    fontSize: 20,
    marginLeft: 50,
    marginTop: 10,
    fontWeight: "bold"
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    fontSize: 50,
    marginBottom: 20,
    fontWeight: "bold"
  },
  TouchableOpacity1: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1
  }
})

export default App
