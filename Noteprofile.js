

import React, { useState,useEffect } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, transparent,StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
const Noteprofile = (props) => {

    const [name,setName] =useState(null)
    const [username,setUsername] =useState(null)
    const [email,setEmail] =useState(null)
    const { navigation } = props;
   

    const [userUid, setUserUid] = useState(null);
    const [isNameEditable, setIsNameEditable] = useState(false);
    const [isUsernameEditable, setIsUsernameEditable] = useState(false); // Add state for username edit mode

    const toggleNameEdit = () => {
      setIsNameEditable(!isNameEditable);
    };
    const toggleUsernameEdit = () => {
        setIsUsernameEditable(!isUsernameEditable);
      };
  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      // User is signed in. You can access the UID here.
      const uid = user.uid;
      setUserUid(uid);
    }
  }, []);


  const fetchUserData = async (userId) => {
    try {
      // Reference to the specific user's data
      const userDataRef = database().ref(`Main/users/${userId}`);
  
      const snapshot = await userDataRef.once('value');
  
      if (snapshot.exists()) {
        // Fetch and use the user's data
        const userData = snapshot.val();
        const userName = userData.Name;
        const userUsername = userData.Username;
        const useremail = userData.Email;
  setName(userName)
  setUsername(userUsername)
  setEmail(useremail)
        // console.log('Name:', userName);
        // console.log('Username:', userUsername);
      } else {
        console.log('User not found or data fields do not exist.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  useEffect(() => {
    fetchUserData(userUid);
  }, [userUid]);
//   fetchUserData(userUid);   
const updateUserData = () => {
    // Update the user's name and username in the Firebase Realtime Database
    const userDataRef = database().ref(`Main/users/${userUid}`);
    userDataRef.update({
      Name: name,
      Username: username,
    });
  };

  const handleLogout = async () => {
    try {
      await auth().signOut();
      // User is now logged out
      // You can navigate to your login or home screen, or perform other post-logout actions.
    } catch (error) {
      // Handle any errors that occur during the sign-out process
      console.error('Error signing out:', error);
    }
  };
  
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView>
            {/* <View style={{alignContent:'center',marginLeft:300,margin}}>
                
  
               </View> */}
            {/*----------------  log out --------------------*/}
            <Text style={{ alignSelf: 'center', marginRight: 250, fontFamily: 'Montserrat-SemiBold', fontSize: 25, margin: 10 ,marginTop:10}}>Profile</Text>
            <View style={{ backgroundColor: '#d7f0f7', height: 40, width: 100, borderRadius: 10, marginLeft: 240, marginTop: 10, position: 'absolute' }}>
                <TouchableOpacity onPress={handleLogout} >
                    <Text style={{ alignContent: 'center', position: 'absolute', margin: 10, alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 15 }}>Log Out</Text>
                    <Image
                        style={{ resizeMode: 'contain', height: 30, width: 50, alignSelf: 'center', marginLeft: 100, marginTop: 5 }}
                        source={require('./assets/images/logout.png')}>
                    </Image>
                </TouchableOpacity>
            </View>
            {/* -------------------------------- Profile photo-------------------------------- */}
            <View style={{ backgroundColor: '#d7f0f7', marginVertical: 200, margin: 10, borderRadius: 10, height: 420, width: 340, position: 'absolute', }}></View>
            <View style={styles.profileContainer}>
            {/* <Icon name="user" size={80} color="black" style={styles.profile}/> */}
                <Image style={styles.profile} source={require('./assets/images/profile.png')} />
            </View>
            {/* -----------------------name------------------------------------------------------ */}
            <View style={{ flexDirection: 'column', alignContent: "center", marginTop: 180, padding: 10, }}>
           




            <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', marginHorizontal: 10, fontSize: 20 }}>Name</Text>
          <TouchableOpacity onPress={toggleNameEdit}>
            <Image
              style={{ height: 20, width: 20, marginLeft: 280, paddingRight: 20, position: 'absolute', right: 10 }}
              source={require('./assets/images/edit.png')}
            />
            <View style={{marginBottom:20}}></View>
          </TouchableOpacity>
          <TextInput
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 20,
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: 'black',
              marginHorizontal: 10,
              height: 50,
              backgroundColor: 'white',
              width: 300,
              margin: 5,
              alignSelf: 'center',
              color:'black'
            }}
            mode={'outlined'}
            editable={isNameEditable}
            selectTextOnFocus={false}
            underlineColorAndroid={'transparent'}
            placeholder={name}
            value={name} // Use 'value' prop to set the input value
    onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: 'Montserrat-SemiBold', marginHorizontal: 10, fontSize: 20 }}>Username</Text>
          <TouchableOpacity onPress={toggleUsernameEdit}>
            <Image
              style={{ height: 20, width: 20, marginLeft: 280, position: 'absolute' }}
              source={require('./assets/images/edit.png')}
            />
            <View style={{marginBottom:20}}>

            </View>
          </TouchableOpacity>
          <TextInput
            style={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 20,
              borderWidth: 0.5,
              borderRadius: 10,
              borderColor: 'black',
              marginHorizontal: 10,
              height: 50,
              backgroundColor: 'white',
              width: 300,
              margin: 5,
              alignSelf: 'center',
              color:'black'

            }}
            mode='outlined'
            editable={isUsernameEditable}
            selectTextOnFocus={false}
            underlineColorAndroid={'transparent'}
            placeholder={username}
            value={username} // Use 'value' prop to set the input value
            onChangeText={(text) => setUsername(text)}
          />
        </View>
                <View style={{ margin: 10 }}>
                    <Text style={{ fontFamily: 'Montserrat-SemiBold', marginHorizontal: 10, fontSize: 20 }}>Email</Text>
                    <View style={{marginBottom:20}}></View>
                    {/* <Image style={{ height: 20, width: 20, marginLeft: 280, position: 'absolute' }} source={require('./assets/images/edit.png')}></Image> */}
                    <TextInput style={{ fontFamily: 'Montserrat-Regular', fontSize: 20, borderWidth: 0.5, borderRadius: 10, borderColor: 'black', marginHorizontal: 10, height: 50, backgroundColor: 'white', width: 300, margin: 5, alignSelf: 'center', height: 50, width: 300 ,              color:'black'
}}
                        mode='outlined'
                       editable={false}
                        selectTextOnFocus={false}
                        placeholder={email}


                    />

                </View>
            </View>
            </ScrollView>

            {/* <View > */}
            {/* -------------------------------------- update button--------------------------------- */}
            <View style={{ position: 'absolute', marginTop: 600, alignSelf: 'center' }}>
        <TouchableOpacity onPress={updateUserData}>
          <View style={{ backgroundColor: '#1CB430', alignSelf: 'center', borderRadius: 10, margin: 50, height: 45, width: 280 }}>
            <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 18, margin: 10 }}>Update</Text>
          </View>
        </TouchableOpacity>
      </View>
           
            {/* </View> */}
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        // borderColor:'black',
        // borderWidth:1,
        height: 200,
        marginTop:80,
        position: 'absolute',

    },
    profile: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        alignItems:'center',
        // borderRadius: 90,
        // margin: 130,
        marginBottom:40        // borderColor:'black',
        // borderWidth:1,
        // marginLeft:100
    },
    Text3: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        marginTop: 220,
        position: 'absolute'

    },
    Text2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        alignSelf: 'center',
        margin: 20,
        marginTop: 245,
        position: 'absolute'
    },

    block: {
        borderRadius: 20,
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        marginHorizontal: 20,
        position: 'absolute',
        //marginTop:190

    },
    block1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        alignSelf: 'center',
        marginRight: 280,
        marginHorizontal: 20,
        marginTop: 15,

    },
    block2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        alignSelf: 'center',
        marginRight: 10,
        marginHorizontal: 20,
        marginTop: 15,

    },

});

export default Noteprofile;
