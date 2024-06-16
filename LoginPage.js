import React from "react"
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
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
    TouchableOpacity

} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"
import MainPage1 from "./MainPage1"
import SignUp from "./SignUp";
import SignUpChange from "./SignUpChange";

const LoginPage = () => {
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(false);
    const toggleVisibility1 = () => {
        setIsVisible1(true);
        setIsVisible2(false);
    };
    const toggleVisibility2 = () => {
        setIsVisible1(false);
        setIsVisible2(true);
    };
    const [checked, setChecked] = React.useState(false);
    const isDarkMode = useColorScheme() === "dark"
    const handleCheckboxToggle = () => {
        setChecked(!checked);
      };
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
                    <TouchableOpacity style={style.touchable} onPress={toggleVisibility1}>

                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat-ExtraBold",
                            color: "black",
                            fontWeight: 'bold',
                            marginTop: 8
                        }}>
                            Sign In
                        </Text>

                        {isVisible1 && <View style={{
                            height: 1,
                            width: '80%',
                            backgroundColor: 'black',
                            marginTop: 5,
                        }}></View>}
                    </TouchableOpacity>




                    {/* SignUp-start */}
                    <TouchableOpacity style={style.touchable} onPress={toggleVisibility2}>
                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat-ExtraBold",
                            color: "black",
                            fontWeight: 'bold',
                            marginTop: 8
                        }}>
                            Sign Up
                        </Text>

                       {isVisible2 && <View style={{
                        height: 1,
                        width: '80%',
                        backgroundColor: 'black',
                        marginTop: 5,
                    }}>

                    </View>}
                    </TouchableOpacity>

                    {/* SignUp-end */}
                </View>
                {/* top-Section-end */}



                {/* SignIn-start */}
                {isVisible1 && <View>

                    <View style={{ flexDirection: 'column', marginTop: 100, marginLeft: 10 }}>
                        <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 30, color: 'black' }}>Welcome,</Text>
                        <Text style={{ fontSize: 17, fontFamily: 'Montserrat-Regular' }}>Sign In To Continue!</Text>
                    </View>
                    {/* Second-Section-end */}


                    {/* Third-Section-start */}

                    <View style={{ flexDirection: 'column', marginTop: 50, alignItems: 'center', width: 320, height: 300, marginLeft: 10 }}>
                        <TextInput label="Email1"
                            width={310}
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
                        <Text style={{ alignSelf: 'flex-end', marginTop: 10, color: '#2F8C88' }}>
                            Forgot Password?
                        </Text>


                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                            <View>
                                <Text style={{ width: 150, textAlign: 'center', color: '#2F8C88' }}>Or Sign In Using</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                        </View>


                        <View  style={{ marginTop: 30, flexDirection: 'row' }} >
                            {/* <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/facebook.png')}>
                            </Image> */}
                            <Icon name="facebook" size={28} color="black" style={{marginRight:20}} />
                            <Icon name="google" size={30} color="black" style={{marginRight:20}}/>
                            <Icon name="apple" size={30} color="black"  style={{marginRight:10}}/>

                            {/* <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/google.png')}>
                            </Image>

                            <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/apple.png')}>
                            </Image> */}

                        </View>

                        {/* <View>
                    <Icon name="rocket" size={30} color="blue" />
                </View> */}
                    </View>
                    {/* Third-Section-end */}



                    <View style={{ width: 300, marginLeft: 23, marginTop: 30 }}>
                        <Button
                            onPress={() => (console.warn("Successfully Login"))}
                            title="Sign In"
                            color="#2F8C88"
                        />
                    </View>


                </View>}
{/* SignIn-end */}


<View>
<SignUpChange data={isVisible2}/>
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

export default LoginPage
