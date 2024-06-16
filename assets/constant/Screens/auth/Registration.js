// import React from "react"
// import { useState,useEffect } from 'react';
// import { TextInput, Checkbox } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';
// // import Toast from 'react-native-toast-message';
// import {
//     Button,
//     Text,
//     StyleSheet,
//     useColorScheme,
//     View,
//     Image,
//     ImageBackground,
//     FlatList,
//     ScrollView,
//     TouchableOpacity,

// } from "react-native"
// import { MYIMG } from "./assets/constant/imgConst"
// import { Colors } from "react-native/Libraries/NewAppScreen"
// import Login from "./Login";

// const Registration = (props) => {
    
    
//     const [userUid, setUserUid] = useState(null);




//     const [username, setUsername] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');
//     const [emailerrorMessage, setEmailErrorMessage] = useState('');
//     const [passworderrorMessage, setPasswordErrorMessage] = useState('');
//     const checkUsernameAvailability = async () => {
//         const usernameRef = database().ref('Main/users');
//         const snapshot = await usernameRef.once('value');
//         const users = snapshot.val();
//         if (users) {
//           const usernames = Object.keys(users);
//           if (usernames.includes(username)) {
//             setErrorMessage('Username is already taken');
//             return false;
//           }
//         }
//         setErrorMessage('');
//         return true;
//       };
//     const handleSignUp = async () => {
//         const ref = database().ref('Main/users');
//         const userRef = ref.child(username);
//         const snapshot = await userRef.once('value');
//         try {
//             if (username.trim() === '') {
//                 setErrorMessage('Username is required');
//                 return;
//             }
//             // if (!(await checkUsernameAvailability())) {
//             //     return;
//             //   }

//             if (email.trim() === '') {
//                 setEmailErrorMessage('Email is required');
//                 return;
//             }
//             setEmailErrorMessage('');

//             if (password.trim() === '') {
//                 setPasswordErrorMessage('Password is required');
//                 return;
//             }
//             setPasswordErrorMessage('');

//             const response = await auth().createUserWithEmailAndPassword(email, password);
//             const getUserID = async () => {
//                 const user = auth().currentUser;
//                 if (user) {
//                   // User is signed in, get the user ID
                 
//                   await database().ref('Main/users/'+user.uid).set({
//                       Name:name,
//                       Username: username,
//                       Email: email,
//                       Password: password,
//                     //   extra:true
//                   });
//                 } else {
//                   // No uUidsetUserUidr is signed in.
//                   setUserUid(null);
//                 }
//               };
          
//               // Call the function to get the user ID
//               getUserID();
//             navigation.navigate('LoginScreen');
//             console.log('User registered successfully!', response.user);
//         } catch (error) {
//             // console.error('Error signing up:', error);
//             // Check if the error is due to existing email
//             if (error.code === 'auth/email-already-in-use') {
//                 setEmailErrorMessage('Email is already in use by another account');
//             } else {
//                 setEmailErrorMessage(error.code);
//             }
//         }
//     };












//     //     const [count, setCount] = useState(false);
//     //     const [email, setEmail] = useState('');
//     //     const [password, setPassword] = useState('');
//     //     const [username, setUsername] = useState('');
//     //     // const [phone, setPhone] = useState('');
//     //     const [errorMessage, setErrorMessage] = useState('');
//     //     const [emailerrorMessage, setEmailErrorMessage] = useState('');
//     //     const [passworderrorMessage, setPasswordErrorMessage] = useState('');
//     //     // const [phoneerrorMessage, setPhoneErrorMessage] = useState('');
//     //     const handleSignUp = async () => {
//     //         try{
//     //         const ref = database().ref('Main/users');
//     //         const userRef = ref.child(username);
//     //         const snapshot = await userRef.once('value');

//     //         if (!username.trim()) {
//     //             // console.log("Please enter the username");
//     //             setErrorMessage("Please enter the username");

//     //         }
//     //         else {
//     //             try {
//     //                 if (snapshot.exists()) {
//     //                     // console.log("User Exists");
//     //                     setErrorMessage("Username exists");
//     //                 }
//     //                 else {
//     //                     setErrorMessage('');
//     //                     setCount(true);
//     //                     // console.log("User not exists");
//     //                     // const isUserCreated=await auth().createUserWithEmailAndPassword(email,password);
//     //                     // navigation.navigate('LoginScreen');
//     //                 }
//     //             } catch (err) {
//     //                 console.log(err);
//     //             }

//     //         }




//     //         if (!email.trim()) {
//     //             // console.log("Please enter the email");
//     //             setEmailErrorMessage("Please enter the email");
//     //         }
//     //         // else {
//     //         //     try {

//     //         //         const signInMethods = await auth().fetchSignInMethodsForEmail(email);
//     //         //         if (signInMethods.length > 0) {
//     //         //             // Toast.show({
//     //         //             //   type: 'error',
//     //         //             //   text1: 'Email already exists!',
//     //         //             //   text2: 'The email address is already in use by another account.',
//     //         //             //   position: 'bottom',
//     //         //             // });
//     //         //             setEmailErrorMessage("Email is already exists");

//     //         //         }
//     //         //         else {
//     //         //             setEmailErrorMessage('');
//     //         //             // setCount(count+1);
//     //         //             // const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
//     //         //             // navigation.navigate('LoginScreen');
//     //         //         }
//     //         //     } catch (err) {
//     //         //         console.log(err);
//     //         //     }

//     //         // }


//     //         if (!password.trim()) {
//     //             setPasswordErrorMessage("Please enter the password");
//     //         }
//     //         else if (password.length < 6) {

//     //             setPasswordErrorMessage("Password must be greater than 6 characters");
//     //         }
//     //         else {

//     //         }
//     // if(count){

//     //     const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
//     //     const ref1 = database().ref('Main/users/'+username).set({
//     //         Username: username,
//     //         Email: email,
//     //         Password: password
//     //     });
//     //     navigation.navigate('LoginScreen');
//     // }
//     //     }catch(err){
//     //         if(err.code==='auth/email-already-in-use'){
//     //             setEmailErrorMessage('Email is already in use by another account');
//     //         }
//     //         else {
//     //             setEmailErrorMessage('');
//     //           }
//     //     }



//     //         {/* ---------------------------------------------------------Phone Number-start----------------------------------------------------------------------------- */ }



//     //         // if (!phone.trim()) {
//     //         //     console.log("Please enter the phone number");
//     //         //     setPhoneErrorMessage("Please enter the phone number");
//     //         // }
//     //         // else {
//     //         //     try {
//     //         //         const query = ref.orderByChild('Phone Number').equalTo(phone);

//     //         //         // Use the 'once()' method to retrieve the data once
//     //         //         const phoneSnapshot = await query.once('value');
//     //         //         if (phoneSnapshot.exists()) {
//     //         //             // console.log("User Exists");
//     //         //             setPhoneErrorMessage("Phone Number exists");
//     //         //         }
//     //         //         else {
//     //         //             setPhoneErrorMessage('');
//     //         //             // console.log("User not exists");
//     //         //             // const isUserCreated=await auth().createUserWithEmailAndPassword(email,password);
//     //         //             // navigation.navigate('LoginScreen');
//     //         //         }
//     //         //     } catch (err) {
//     //         //         console.log(err);
//     //         //     }

//     //         // }


//     //         {/* ---------------------------------------------------------Phone Number-end----------------------------------------------------------------------------- */ }







//     //         // }catch(err){
//     //         //     console.log(err);
//     //         // }
//     //     }



//     const { navigation } = props;
//     // const { username } = props.route.params;
//     const [isVisible, setIsVisible] = useState(true);
//     const toggleVisibility = () => {
//         setIsVisible(!isVisible);
//     };
//     const [checked, setChecked] = React.useState(false);
//     const isDarkMode = useColorScheme() === "dark"

//     const backgroundStyle = {
//         backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
//     }


//     return (

//         <ScrollView>

//             <View style={{
//                 alignItems: 'flex-start',
//                 justifyContent: 'center',
//                 marginLeft: 10,
//                 marginTop: 20
//             }}>


//                 {/* top-Section-start */}
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Image style={{ width: 110, height: 80, borderRadius: 10 }}
//                         source={require('./images/image6.png')}>
//                     </Image>
//                     <TouchableOpacity style={style.touchable} onPress={() => (navigation.navigate('LoginScreen'))}>

//                         <Text style={{
//                             fontSize: 17,
//                             fontFamily: "Montserrat-ExtraBold",
//                             color: "black",
//                             fontWeight: 'bold',
//                             marginTop: 8
//                         }}>
//                             Sign In
//                         </Text>

//                         {/* <View style={{
//                             height: 1,
//                             width: '80%',
//                             backgroundColor: 'black',
//                             marginTop: 5,
//                         }}></View> */}
//                     </TouchableOpacity>




//                     {/* SignUp-start */}
//                     <TouchableOpacity style={style.touchable} onPress={() => (<SignUp />)}>
//                         <Text style={{
//                             fontSize: 17,
//                             fontFamily: "Montserrat-ExtraBold",
//                             color: "black",
//                             fontWeight: 'bold',
//                             marginTop: 8
//                         }}>
//                             Sign Up
//                         </Text>

//                         <View style={{
//                             height: 1,
//                             width: '80%',
//                             backgroundColor: 'black',
//                             marginTop: 5,
//                         }}>

//                         </View>
//                     </TouchableOpacity>

//                     {/* SignUp-end */}
//                 </View>
//                 {/* top-Section-end */}



//                 {/* Second-Section-start */}

//                 <View style={{ flexDirection: 'column', marginTop: 60, marginLeft: 10 }}>
//                     <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 30, color: 'black' }}>Create Account,</Text>
//                     <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Regular' }}>Sign up to get started!</Text>
//                 </View>
//                 {/* Second-Section-end */}

//                 {/* Third-Section-start */}

//                 <View style={{ flexDirection: 'column', marginTop: 40, alignItems: 'center', width: 320, height: 300, marginLeft: 10 }}>
//                 <TextInput label={"Name"}
//                         value={name}
//                         onChangeText={value => setName(value)}
//                         width={310}
//                         mode="outlined"
//                         error={errorMessage !== ''}
//                         style={style.input1}

//                     />
//                     <TextInput label={"Username"}
//                         value={username}
//                         onChangeText={value => setUsername(value)}
//                         width={310}
//                         mode="outlined"
//                         error={errorMessage !== ''}
//                         style={style.input1}

//                     />
//                     {errorMessage !== '' && <Text style={{
//                         alignSelf: 'flex-start', marginLeft: 6,
//                         color: 'red',
//                         // marginBottom: 10,
//                     }}>{errorMessage}</Text>}
//                     <TextInput label="Email"
//                         value={email}
//                         onChangeText={value => setEmail(value)}
//                         width={310}
//                         error={emailerrorMessage !== ''}
//                         mode="outlined"
//                         keyboardType="email-address"
//                         style={style.input1} />
//                     {emailerrorMessage !== '' && <Text style={{
//                         alignSelf: 'flex-start', marginLeft: 6,
//                         color: 'red',
//                         // marginBottom: 10,
//                     }}>{emailerrorMessage}</Text>}



//                     {/* ---------------------------------------------------------Phone Number-start----------------------------------------------------------------------------- */}

//                     {/* <TextInput label="Phone Number"
//                         value={phone}
//                         onChangeText={value => setPhone(value)}
//                         width={310}
//                         keyboardType="phone-pad"
//                         error={phoneerrorMessage !== ''}
//                         mode="outlined"
//                         style={style.input1} />

//                            {phoneerrorMessage !== '' && <Text style={{
//                                alignSelf: 'flex-start', marginLeft: 6,
//                         color: 'red',
//                         // marginBottom: 10,
//                     }}>{phoneerrorMessage}</Text>} */}

//                     {/* ---------------------------------------------------------Phone Number-end----------------------------------------------------------------------------- */}






//                     {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, }}  placeholder="Enter Email"  label="Email">
//                 </TextInput> */}
//                     {/* <TextInput style={{ borderColor: 'black', borderRadius: 10, borderWidth: 1, width: 310, marginTop: 35 }} placeholder="Enter Password" secureTextEntry={true} label="Email">
//                 </TextInput> */}
//                     <TextInput label="Password"
//                         value={password}
//                         onChangeText={value => setPassword(value)}
//                         secureTextEntry={true}
//                         width={310}
//                         mode="outlined"
//                         style={style.input2} />
//                     {/* <Text style={{ alignSelf: 'flex-end', marginTop: 10, color: '#2F8C88' }}>
//                         Forgot Password?
//                     </Text> */}


//                     {/* ---------------------------------------------------------------Check Box-start----------------------------------------------------------------------- */}

//                     {/* <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center', marginRight: 10 }}>

//                         <Checkbox
//                             color={'green'}

//                             onValueChange={setChecked}
//                             value={checked}
//                             status={checked ? 'checked' : 'unchecked'}

//                             onPress={() => {
//                                 setChecked(!checked);
//                             }}
//                         //   onValueChange={setSelection}
//                         //   style={styles.checkbox}
//                         />
//                         <Text style={{ color: 'black' }}>I Accept Terms & Conditions & Privacy Policy</Text>
//                     </View> */}
//                     {/* ---------------------------------------------------------Check Box-end----------------------------------------------------------------------------- */}



//                     {/* ---------------------------------------------------------Or sign up-start----------------------------------------------------------------------------- */}


//                     {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                         <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
//                         <View>
//                             <Text style={{ width: 150, textAlign: 'center', color: '#2F8C88' }}>Or Sign Up Using</Text>
//                         </View>
//                         <View style={{ flex: 1, height: 1, backgroundColor: '#2F8C88' }} />
//                     </View> */}
//                     {/* ---------------------------------------------------------Or sign up-end----------------------------------------------------------------------------- */}


//                     {/* ---------------------------------------------------------Icons-start----------------------------------------------------------------------------- */}


//                     {/* <View style={{ marginTop: 15, flexDirection: 'row' }}> */}
//                     {/* <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
//                             source={require('./assets/images/facebook.png')}>
//                         </Image>

//                         <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
//                             source={require('./assets/images/google.png')}>
//                         </Image>

//                         <Image style={{ width: 30, height: 30, borderRadius: 10, marginRight: 10 }}
//                             source={require('./assets/images/apple.png')}>
//                         </Image> */}

//                     {/* <Icon name="facebook" size={28} color="black" style={{ marginRight: 20 }} />
//                         <Icon name="google" size={30} color="black" style={{ marginRight: 20 }} />
//                         <Icon name="apple" size={30} color="black" style={{ marginRight: 10 }} />

//                     </View> */}

//                     {/* ---------------------------------------------------------Icons-end----------------------------------------------------------------------------- */}


//                     {/* <View>
//                     <Icon name="rocket" size={30} color="blue" />
//                 </View> */}
//                 </View>
//                 {/* Third-Section-end */}



//                 <View style={{ width: 300, marginLeft: 23, marginTop: 50 }}>
//                     <Button
//                         // onPress={() => (navigation.navigate('LoginScreen'))}
//                         onPress={() => handleSignUp()}
//                         title="Sign Up"
//                         color="#2F8C88"
//                     />
//                 </View>



//             </View>
//         </ScrollView>


//     )
// }

// const style = StyleSheet.create({

//     text1: {
//         color: "black",
//         fontSize: 20,
//         fontWeight: "bold",
//         marginBottom: 10
//     },
//     label: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     input1: {
//         height: 50,
//         marginTop: 8,
//         color: 'black',

//     },
//     input2: {
//         height: 50,
//         marginTop: 8,
//         color: 'black',
//     },
//     touchable: {
//         alignItems: 'center', alignContent: 'center', marginLeft: 25, width: 80, height: 40,
//     },
// })

// export default Registration




import React, { useState } from "react";
import { TextInput, Button, Text, StyleSheet, ScrollView, View } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const Registration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const checkUsernameAvailability = async () => {
    try {
      const usernameRef = database().ref('Main/users');
      const snapshot = await usernameRef.once('value');
      const users = snapshot.val();
      if (users) {
        const usernames = Object.keys(users);
        if (usernames.includes(username)) {
          setErrorMessage('Username is already taken');
          return false;
        }
      }
      setErrorMessage('');
      return true;
    } catch (error) {
      console.error('Error checking username availability:', error);
      return false;
    }
  };

  const handleSignUp = async () => {
    try {
      if (username.trim() === '') {
        setErrorMessage('Username is required');
        return;
      }

      if (email.trim() === '') {
        setEmailErrorMessage('Email is required');
        return;
      }

      if (password.trim() === '') {
        setPasswordErrorMessage('Password is required');
        return;
      }

      const isUsernameAvailable = await checkUsernameAvailability();
      if (!isUsernameAvailable) {
        return;
      }

      setErrorMessage('');
      setEmailErrorMessage('');
      setPasswordErrorMessage('');

      const response = await auth().createUserWithEmailAndPassword(email, password);
      const user = auth().currentUser;

      if (user) {
        await database().ref(`Main/users/${user.uid}`).set({
          Name: name,
          Username: username,
          Email: email,
          Password: password,
        });

        navigation.navigate('LoginScreen');

        console.log('User registered successfully!', response.user);
      } else {
        console.error('No user found after registration.');
      }
    } catch (error) {
      console.error('Error signing up:', error);

      if (error.code === 'auth/email-already-in-use') {
        setEmailErrorMessage('Email is already in use by another account');
      } else {
        setEmailErrorMessage('Registration failed. Please try again later.');
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Sign up to get started!</Text>

        <TextInput
          label="Name"
          value={name}
          onChangeText={value => setName(value)}
          style={styles.input}
        />

        <TextInput
          label="Username"
          value={username}
          onChangeText={value => setUsername(value)}
          style={styles.input}
        />

        {errorMessage !== '' && <Text style={styles.errorText}>{errorMessage}</Text>}

        <TextInput
          label="Email"
          value={email}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          style={styles.input}
        />

        {emailErrorMessage !== '' && <Text style={styles.errorText}>{emailErrorMessage}</Text>}

        <TextInput
          label="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
          style={styles.input}
        />

        {passwordErrorMessage !== '' && <Text style={styles.errorText}>{passwordErrorMessage}</Text>}

        <Button
          title="Sign Up"
          onPress={handleSignUp}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Registration;
