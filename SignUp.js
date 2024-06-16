import React from "react"
import  { useState } from 'react';
import { TextInput ,Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Button,
    Text,
    StyleSheet,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    FlatList,
    ScrollView,
    TouchableOpacity,

} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"
import MainPage1 from "./MainPage1"

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };
    const [checked, setChecked] = React.useState(false);
    const isDarkMode = useColorScheme() === "dark"

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    }


    return (

        <ScrollView>

            <View style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                marginLeft: 10,
                marginTop: 20
            }}>


                {/* top-Section-start */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 110, height: 80, borderRadius: 10 }}
                        source={require('./assets/images/image6.png')}>
                    </Image>
                    <TouchableOpacity style={style.touchable} onPress={() => (console.warn("Sign In"))}>

                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat-ExtraBold",
                            color: "black",
                            fontWeight: 'bold',
                            marginTop: 8
                        }}>
                            Sign In
                        </Text>

                        {/* <View style={{
                            height: 1,
                            width: '80%',
                            backgroundColor: 'black',
                            marginTop: 5,
                        }}></View> */}
                    </TouchableOpacity>




                    {/* SignUp-start */}
                    <TouchableOpacity style={style.touchable} onPress={() => (<SignUp />)}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat-ExtraBold",
                            color: "black",
                            fontWeight: 'bold',
                            marginTop: 8
                        }}>
                            Sign Up
                        </Text>

                        <View style={{
                        height: 1,
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 5,
                    }}>

                    </View>
                    </TouchableOpacity>

                    {/* SignUp-end */}
                </View>
                {/* top-Section-end */}



                {/* Second-Section-start */}

                <View style={{ flexDirection: 'column', marginTop: 60, marginLeft: 10 }}>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 30, color: 'black' }}>Create Account,</Text>
                    <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Regular' }}>Sign up to get started!</Text>
                </View>
                {/* Second-Section-end */}

                {/* Third-Section-start */}

                <View style={{ flexDirection: 'column', marginTop: 40, alignItems: 'center', width: 320, height: 300, marginLeft: 10 }}>
                    
                <TextInput label="Full Name"
                        width={310}
                        mode="outlined"
                        style={style.input1} />

                    <TextInput label="Email"
                        width={310}
                        mode="outlined"
                        keyboardType="email-address"
                        style={style.input1} />

                         <TextInput label="Phone Number"
                        width={310}
                        keyboardType="phone-pad"
                        mode="outlined"
                        style={style.input1} />
                    {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, }}  placeholder="Enter Email"  label="Email">
                </TextInput> */}
                    {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, marginTop: 35 }} placeholder="Enter Password" secureTextEntry={true} label="Email">
                </TextInput> */}
                    <TextInput label="Password"
                        secureTextEntry={true}
                        width={310}
                        mode="outlined"
                        style={style.input2} />
                    {/* <Text style={{ alignSelf: 'flex-end', marginTop: 10, color: '#2F8C88' }}>
                        Forgot Password?
                    </Text> */}
                    <View style={{flexDirection:'row',marginTop:10,alignItems:'center',marginRight:10}}>

                     <Checkbox
                     color={'green'}
                   
                     onValueChange={setChecked}
          value={checked}
          status={checked ? 'checked' : 'unchecked'}
          
      onPress={() => {
        setChecked(!checked);
      }}
        //   onValueChange={setSelection}
        //   style={styles.checkbox}
        />
        <Text >I Accept Terms & Conditions & Privacy Policy</Text>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                        <View>
                            <Text style={{ width: 150, textAlign: 'center', color: '#2F8C88' }}>Or Sign Up Using</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                    </View>


                    <View style={{ marginTop: 15, flexDirection: 'row' }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                            source={require('./assets/images/facebook.png')}>
                        </Image>

                        <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                            source={require('./assets/images/google.png')}>
                        </Image>

                        <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                            source={require('./assets/images/apple.png')}>
                        </Image>

                    </View>

                    {/* <View>
                    <Icon name="rocket" size={30} color="blue" />
                </View> */}
                </View>
                {/* Third-Section-end */}



                <View style={{ width: 300, marginLeft: 23, marginTop: 110 }}>
                    <Button
                        onPress={() => (console.warn("Successfully SignUp"))}
                        title="Sign Up"
                        color="#2F8C88"
                    />
                </View>



            </View>
        </ScrollView>


    )
}

const style = StyleSheet.create({

    text1: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input1: {
        height: 50,
        marginTop: 8,
        color: 'black',

    },
    input2: {
        height: 50,
        marginTop: 8,
        color: 'black',
    },
    touchable: {
        alignItems: 'center', alignContent: 'center', marginLeft: 25, width: 80, height: 40,
    },
})

export default SignUp
