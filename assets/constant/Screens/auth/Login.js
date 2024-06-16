import React from "react"
import { useState,useEffect } from 'react';
import { TextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
// import firebase from 'firebase';
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
    PlatformColor

} from "react-native"
import { MYIMG } from "./assets/constant/imgConst"
import { Colors } from "react-native/Libraries/NewAppScreen"
import { StackActions,useNavigation } from "@react-navigation/native";
// import SignUpChange from "./SignUpChange";

const Login = ({route}) => {
    const navigation=useNavigation();
    // const  ID  = route.params;
    // console.log("----------------------------------------"+ID+"--------------------------------------");
    const [userUid, setUserUid] = useState(null);
 
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    
    
    
    
    
    
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailerrorMessage, setEmailErrorMessage] = useState('');
    const [passworderrorMessage, setPasswordErrorMessage] = useState('');
    const [extra, setExtra] = useState(false);
    const handleSignIn=async()=>{
        
        try{
            if(email.trim()===''){
                setEmailErrorMessage("Please enter the email")
                return;
            }
            if(password.trim()===''){
                setPasswordErrorMessage("Please enter the password")
return;
            }
        
            const isUserLogin=await auth().signInWithEmailAndPassword(email,password);
            const user = auth().currentUser;
            // console.log("----------------------------------------"+user+"--------------------------------------");
            // console.log("----------------------------------------"+user+"--------------------------------------");
            if (user) {
                    // const snapshot = await database().ref('Main/users/'+user.uid+'/extra').once('value');
                    // const userID=user.uid
                    // if (snapshot.exists()) {
 
                    //         if(snapshot.val()){
                                
                    //             navigation.dispatch(StackActions.replace("GetInformation",{userUid}))
                    //         }else{
                                
                                // const isUserLogin=await auth().signInWithEmailAndPassword(email,password);
                                navigation.dispatch(StackActions.replace("HomePage",{ userUid: userUid }));
                            // }
                            
                    
                            
                          

                        // return snapshot.val();
                        // setExtra(snapshot.val());
    
                    //   }
                //   console.log("----------------------------------------"+extra+"--------------------------------------");
                  
                } else {
                    
                }
                
         

       

        
        
        
       
        }catch(err){
            if(err.code=="auth/user-not-found"){
                console.log("User not found");
            }
            console.log(err);
        }
    }
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
                alignItems: 'center',
                justifyContent: 'center',
                // marginLeft: 10,
                marginTop: 20,
            }}>


                {/* top-Section-start */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 110, height: 80, borderRadius: 10 }}
                        source={require('./images/image6.png')}>
                    </Image>
                    <TouchableOpacity style={style.touchable} onPress={toggleVisibility1}>

                        <Text style={{
                            fontSize: 17,
                            fontFamily: "Montserrat-ExtraBold",
                            // color: PlatformColor.OS,
                            color:'black',
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
                    <TouchableOpacity style={style.touchable} onPress={()=>(navigation.navigate("Registration"))}>
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
                        <TextInput label="Email"
                        value={email}
                        onChangeText={value=>setEmail(value)}
                            width={310}
                            mode="outlined"
                            error={emailerrorMessage !== ''}
                            style={style.input1} />

                            {emailerrorMessage !== '' && <Text style={{
                                alignSelf: 'flex-start', marginLeft: 6,
                                color: 'red',
                                // marginBottom: 10,
                    }}>{emailerrorMessage}</Text>}
                        {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, }}  placeholder="Enter Email"  label="Email">
                </TextInput> */}
                        {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, marginTop: 35 }} placeholder="Enter Password" secureTextEntry={true} label="Email">
                </TextInput> */}
                        <TextInput label="Password"
                           value={password}
                           onChangeText={value=>setPassword(value)}
                           secureTextEntry={true}
                           width={310}
                           mode="outlined"
                           error={passworderrorMessage !== ''}
                            style={style.input2} />
                           {passworderrorMessage !== '' && <Text style={{
                               alignSelf: 'flex-start', marginLeft: 6,
                               color: 'red',
                               // marginBottom: 10,
                   }}>{passworderrorMessage}</Text>}


                        {/* <Text style={{ alignSelf: 'flex-end', marginTop: 10, color: '#2F8C88' }}>
                            Forgot Password?
                        </Text> */}


                        {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50 }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                            <View>
                                <Text style={{ width: 150, textAlign: 'center', color: '#2F8C88' }}>Or Sign In Using</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
                        </View> */}


                        {/* <View style={{ marginTop: 30, flexDirection: 'row' }} > */}
                            {/* <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/facebook.png')}>
                            </Image> */}
                            {/* <Icon name="facebook" size={28} color="black" style={{ marginRight: 20 }} />
                            <Icon name="google" size={30} color="black" style={{ marginRight: 20 }} />
                            <Icon name="apple" size={30} color="black" style={{ marginRight: 10 }} /> */}

                            {/* <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/google.png')}>
                            </Image>

                            <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
                                source={require('./assets/images/apple.png')}>
                            </Image> */}

                        {/* </View> */}

                        {/* <View>
                    <Icon name="rocket" size={30} color="blue" />
                </View> */}
                    </View>
                    {/* Third-Section-end */}



                    <View style={{ width: 300, marginLeft: 23 }}>
                        <Button
                            onPress={() => (
// navigation.navigate("Registration",{username: 'IronMan'})
handleSignIn()
                                )}
                            title="Sign In"
                            color="#2F8C88"
                        />
                    </View>


                </View>}
                {/* SignIn-end */}


                {/* <View>
<SignUpChange data={isVisible2}/>
</View> */}





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

export default Login
