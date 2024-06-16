// import React,{useState,useEffect} from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { StackActions,useNavigation } from '@react-navigation/native';
// const SplashScreen = ({navigation}) => {
//     // const navigation=useNavigation();
   
//     useEffect(() => {
//       setTimeout(()=>{
//         auth().onAuthStateChanged(user =>{
//             const routeName=user!==null?"HomePage":"LoginScreen";
//             const uid=user.uid
//     navigation.dispatch(
//         StackActions.replace(routeName,uid))
//         });
//       },3000);
    
//       return () => {}
//     }, [])
    
//     return (
// <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
//     <Text style={{fontSize:17,color:"black"}}>
//         SplashScreen
//     </Text>
// </View>
//     );
// };



// export default SplashScreen;




import React, { useEffect } from 'react';
import { View, Text,Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StackActions, useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
   const navigation=useNavigation();
  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user !== null) {
          const uid = user.uid; // Get the user's UID
          navigation.dispatch(
            StackActions.replace('HomePage', { userUid: uid })
          );
        } else {
          navigation.dispatch(
            StackActions.replace('LoginScreen')
          );
        }
      });
    }, 3000);
  }, []);

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Image style={{ width: 120, height: 90, borderRadius: 10 }}
                        source={require('./images/logo.png')}>
                    </Image>
      <Text style={{ fontSize: 20, color: "black" ,fontFamily:'Montserrat-SemiBold'}}>
        Notes
      </Text>
    </View>
  );
};

export default SplashScreen;
