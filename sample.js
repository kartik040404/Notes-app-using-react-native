// import {
//     Text,
//     View,
//     Image,
//     StyleSheet,
//     TouchableOpacity,
//     ImageBackground,
//     SafeAreaView,
//     formattedTime,
//     Picker,
//     ScrollView

// } from 'react-native';
// import React, { Component, useState, useEffect } from 'react';
// import * as Progress from 'react-native-progress';
// import { setUpdateIntervalForType, SensorTypes, accelerometer } from 'react-native-sensors';

// //import React,{useState} from 'react';
// // import { Font } from 'react-native-paper/lib/typescript/src/types';
// // import { ScrollView } from 'react-native-gesture-handler';
// // import { ProgressBar, Title } from 'react-native-paper';
// //import{AutoScrolling } from 'react-native-auto-scrolling';
// // import { white, black } from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';
// //import { SafeAreaView } from 'react-native-safe-area-context';
// //import CircularProgress from 'react-native-circular-progress-indicator';
// //import { withReanimatedTimer } from 'react-native-reanimated';



// const Sample = (props) => {
//     const [stepCount, setStepCount] = useState(0);
//     const [lastShakeTime, setLastShakeTime] = useState(0);
  
//     useEffect(() => {
//       setUpdateIntervalForType(SensorTypes.accelerometer, 100); // Update interval in milliseconds
  
//       const handleAccelerometerData = ({ x, y, z }) => {
//         const currentTime = Date.now();
//         const timeDiff = currentTime - lastShakeTime;
  
//         if (timeDiff > 1000 && isShaking(x, y, z)) {
//           setLastShakeTime(currentTime);
//           setStepCount((prevCount) => prevCount + 1);
//         }
//       };
  
//       const isShaking = (x, y, z) => {
//         const threshold = 10; // Adjust this value based on device sensitivity
//         return x > threshold || y > threshold || z > threshold;
//       };
  
//       const subscription = accelerometer.subscribe(handleAccelerometerData);
  
//       return () => {
//         subscription.unsubscribe();
//       };
//     }, [lastShakeTime]);
//     //   const [value, setValue] = useState(0);

//     // const [selectedTime, setSelectedTime] = useState(1);

//     // const handleTimeChange = (value) => {
//     //     setSelectedTime(value);
//     // };
//     const { navigation } = props;
//     const handleStartPress = () => {
//         navigation.navigate('Profile');

//         //     const [greeting, setGreeting] = useState('');
//         //     const [userName, setUserName] = useState('');
//         // const fetchDataFromDatabase = async () => {

//         //     setTimeout(() => {
//         //         setGreeting('Good Morning');
//         //         setUserName('Suresh'); 
//         //     }, 1000);
//         // useEffect(() => {
//         //     fetchDataFromDatabase();
//         // }, []);
//         //{greeting}, {userName} at the text

//     };



//     return (
//         <ScrollView>

      
//         <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
//             <View style={{ flex: 1, flexDirection: 'column' }}>
//                 {/* <ImageBackground
//             style={{height:900,width:500,}}
//             source={require('./img/bg.jpg')}
            
            
//             > */}

//                 <View style={{ alignContent: 'center', flexDirection: 'column' }}>

//                     <Text style={{ fontFamily: 'Montserrat-Regular', margin: 5 }} >Good Morning, Shubham</Text>
//                     <Text style={styles.heading}>Ready to Workout?</Text>
//                     <TouchableOpacity onPress={handleStartPress} >
//                         <View style={{ flexDirection: 'row', height: 15, marginRight: 40, paddingLeft: 290 }}>

//                             <Image style={styles.profile}
//                                 source={require('./assets/images/header.jpg')}></Image>
//                         </View>
//                     </TouchableOpacity>
//                 </View>
//                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//                     <ScrollView horizontal={true}
//                         style={styles.menu} delay={0}
//                         duration={6000}>
//                         <TouchableOpacity >
//                             <Image
//                                 style={{ height: 180, width: 320, margin: 20, marginTop: 20, borderRadius: 10, justifyContent: 'center' }}
//                                 source={require('./assets/images/BG.png')} />
//                             <Image
//                                 style={{ height: 190, width: 150, marginHorizontal: 30, position: 'absolute', resizeMode: 'contain', marginTop: 10, marginLeft: 180, justifyContent: 'center' }}
//                                 source={require('./assets/images/model.png')} />

//                         </TouchableOpacity>
//                         <View style={{ flex: 1, marginTop: 80, margin: 35, position: 'absolute' }}>
//                             <Text style={styles.Text3}>Fitness</Text>
//                             <Text style={styles.Text1}>Limited Offers </Text>
//                             <Text style={styles.Text1}>30% Discount</Text>
//                             <Text style={styles.Text1}>Flash Sales</Text>
//                         </View>
//                         <TouchableOpacity >
//                             <Image
//                                 style={{ height: 180, width: 320, margin: 20, marginTop: 20, borderRadius: 10, justifyContent: 'center' }}
//                                 source={require('./assets/images/BG.png')} />

//                             <Image
//                                 style={{ height: 185, width: 190, marginHorizontal: 30, position: 'absolute', resizeMode: 'contain', marginTop: 30, marginLeft: 160, justifyContent: 'center' }}
//                                 source={require('./assets/images/couple1.png')} />
//                             <View style={{ flex: 1, marginTop: 80, margin: 40, position: 'absolute' }}>
//                                 <Text style={styles.Text3}>Fitness</Text>
//                                 <Text style={styles.Text1}>Training Yoga  </Text>
//                                 <Text style={styles.Text1}>class 01</Text>
//                                 <Text style={styles.Text2}>starting date: 01 Aug</Text>
//                             </View>
//                         </TouchableOpacity>


//                     </ScrollView >
//                     <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', marginTop: 200, margin: 15, position: 'absolute' }}>
//                         <Text style={styles.Text4}>Activities</Text>
//                         <ScrollView horizontal={true}
//                             style={styles.menu2} delay={0}
//                             duration={6000}>



//                             <TouchableOpacity>
//                                 <View style={{ backgroundColor: '#d7f0f7', marginVertical: 10, margin: 10, marginLeft: 90, borderRadius: 10, height: 180, width: 100, }}>
//                                     <Image
//                                         style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf: 'center', marginTop: 10 }}
//                                         source={require('./assets/images/gymicon.png')}>

//                                     </Image>
//                                     <Text style={styles.Text5}>Gym</Text>

//                                     <View style={{alignSelf: 'center', marginTop:18}}>

//                                     <Progress.Circle
//                                         size={50}
//                                         progress={stepCount / 1000}
//                                         showsText
//                                         unfilledColor="#ededed"
//                                         borderColor="#ededed"
//                                         color="black"
//                                         direction="counter-clockwise"
//                                         fill="white"
//                                         strokeCap="round"
//                                         thickness={5}
//                                         style={{
//                                             shadowColor: 'grey',
//                                             shadowOffset: { width: 2, height: 2 },
//                                             shadowOpacity: 0.1,
//                                             shadowRadius: 1,
//                                         }}
//                                         textStyle={{
//                                             fontSize: 16,
//                                             fontFamily: 'Poppins-Bold',
//                                             fontWeight: 'bold',
//                                             color:'white'
//                                         }} circle
//                                     />
//                                     </View>

//                                 </View>
//                             </TouchableOpacity>




//                             <TouchableOpacity>

//                                 <View style={{ backgroundColor: '#dad5fe', marginVertical: 10, borderRadius: 10, height: 180, width: 100, }}>
//                                     <Image
//                                         style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf: 'center', marginTop: 10 }}
//                                         source={require('./assets/images/cycle.png')}>

//                                     </Image>
//                                     <Text style={styles.Text5}>Cycling</Text>

//                                 </View>

//                             </TouchableOpacity>




//                             <TouchableOpacity>
//                                 <View style={{ backgroundColor: '#d7f0f7', marginVertical: 10, margin: 10, borderRadius: 10, height: 180, width: 100, }}>
//                                     <Image
//                                         style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf: 'center', marginTop: 10 }}
//                                         source={require('./assets/images/run.png')}>

//                                     </Image>
//                                     <Text style={styles.Text5}>Running</Text>
//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <View style={{ backgroundColor: '#d7f0f7', marginVertical: 10, margin: 10, borderRadius: 10, height: 180, width: 100, }}>
//                                     <Image
//                                         style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf: 'center', marginTop: 10 }}
//                                         source={require('./assets/images/yoga.png')}>

//                                     </Image>
//                                     <Text style={styles.Text5}>Yoga</Text>


//                                 </View>
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <View style={{ backgroundColor: '#dad5fe', marginVertical: 10, margin: 10, borderRadius: 10, height: 180, marginRight: 90, width: 100, }}>
//                                     <Image
//                                         style={{ resizeMode: 'contain', height: 50, width: 50, alignSelf: 'center', marginTop: 10 }}
//                                         source={require('./assets/images/walk.png')}>

//                                     </Image>
//                                     <Text style={styles.Text5}>Steps</Text>

//                                 </View>
//                             </TouchableOpacity>

//                         </ScrollView>





//                     </View>
//                 </View>

//                 {/* shedule-start */}
//                 <View style={{ alignItems: 'center', marginTop: 500, marginBottom: -10, position: 'absolute' }}>
//                     <Text style={{ fontSize: 18, fontFamily: 'Montserrat-Bold', marginVertical:10 ,marginRight:250,alignItems:'center'}}>Schedule</Text>
//                     <Image
//                         style={{ height: 160, width: 320, marginHorizontal: 20, borderRadius: 10, justifyContent: 'center' }}
//                         source={require('./assets/images/BG.png')} />
//                     <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: -150 }}>
//                         <Text style={{position:'absolute',color:'white',fontFamily:'Montserrat-SemiBold',fontSize:16}}>Duration</Text>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.buttonText}>1-10</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.buttonText}>1-30</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.buttonText}>1-60</Text>
//                         </TouchableOpacity>

//                     </View>
//                     <View style={{ position: 'absolute', marginTop:190, alignSelf: 'center' }}>
//                         <TouchableOpacity >
//                             <View style={{ backgroundColor: '#1CB430', alignSelf: 'center', borderRadius: 10, margin: 50, height: 45, width: 300, }}>
//                                 <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 18, margin: 10, }}>Let's Started</Text>
//                             </View>

//                         </TouchableOpacity>
//                     </View>


//                 </View>
//                 {/* onPress={handleStartPress} */}

//                 {/* Shedule-end */}



//             </View>
//         </SafeAreaView >

//         </ScrollView>


//     )

// }
// const styles = StyleSheet.create(
//     {

//         button: {
//             backgroundColor: '#dad5fe',
//             borderRadius: 5,
//             paddingVertical: 15,
//             paddingHorizontal: 15,
//             margin: 20,
//             marginTop: 40,
//             alignSelf: 'center',
//             elevation: 10,
//         },
//         buttonText: {
//             color: 'black',
//             fontSize: 18,
//             alignSelf: 'center',



//         },
//         heading: {

//             fontSize: 20,
//             marginHorizontal: 5,
//             fontFamily: 'Montserrat-Black',
//             flexDirection: 'column',
//             color: 'Black',
//         },
//         timeContainer: {
//             alignItems: 'center',
//             marginTop: 20,
//             position: 'absolute',


//         },
//         timeText: {
//             fontSize: 18,
//             fontFamily: 'Montserrat-Bold',
//             position: 'absolute',
//             marginTop: 600,
//             paddingLeft: 300
//         },
//         profile: {
//             height: 60,
//             width: 60,

//             justifyContent: 'center',
//             alignSelf: 'flex-end',
//             flexDirection: 'row-reverse',
//             borderRadius: 40,
//         },
//         Text1: {
//             fontFamily: 'Montserrat-Bold',
//             fontSize: 18,
//             color: 'white',
//         },
//         Text3: {
//             fontFamily: 'Montserrat-SemiBold',
//             fontSize: 10,
//             color: 'white',
//             marginTop: -20,
//             marginLeft: 10,
//             marginBottom: 10
//         },
//         Text2: {
//             fontFamily: 'Montserrat-Medium',
//             fontSize: 10,
//             color: 'Black',
//         },
//         Text4: {
//             fontFamily: 'Montserrat-Bold',
//             fontSize: 18,
//             color: 'Black',
//             paddingLeft: 85,
//             flexDirection: 'column',
//             //alignSelf:'flex-start',
//             flex: 1,
//             margin: 10,

//         },
//         Text5: {
//             fontFamily: 'Montserrat-SemiBold',
//             fontSize: 15,
//             alignSelf: 'center',
//             color: 'black',
//             marginTop: 5,
//             alignSelf: 'center'

//         },
//         menu: {
//             borderRadius: 20,
//             height: 800,
//             width: 200,

//         },
//         menu2: {
//             borderRadius: 20,
//             height: 500,
//             width: 500,
//             marginHorizontal: 20,

//         },
//         menu3: {
//             borderRadius: 20,
//             height: 300,
//             width: 200,
//             marginHorizontal: 20,
//             position: 'absolute'
//         },

//     });

// export default Sample;