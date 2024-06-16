import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import { StackActions,useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import firebase from 'firebase/app'; // Import Firebase
import 'firebase/database';
import database from '@react-native-firebase/database'; 

const Createnote = () => {

    const navigation=useNavigation();

    const route = useRoute();
    const useruid = route.params.data;
    // const title = route.params.Title;
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    // Function to upload the note to Firebase
    const handleUpload = () => {
      if (title && content) {
        // Get the current user's UID (assuming you have user authentication set up)
        // const currentUserUID = firebase.auth().currentUser.uid;
        
        // Get a reference to the Firebase database
        // const database = firebase.database();
        
        // Get a reference to the user's "Notes" node under their UID
        const userNotesRef = database().ref(`Main/users/${useruid}/Notes`);
        
        // Create a new child node with the title as the key and content as the value
        userNotesRef.child(title).set(content);
        
        // Clear the input fields after uploading
        setTitle('');
        setContent('');
      }
    };

    const NextActivity = () => {

        navigation.navigate("ProgramList",{data:useruid,activity:"CreateNote"})
      
     };

    return (
        <ScrollView style={{ flexDirection: 'column', marginTop: 30, alignContent: 'center', margin: 10 }}>

           {/* ------------------------------------ Create note Title ---------------------------------------------- */}
            <View style={styles.s1}>
                <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 30 }}>Create a Note</Text>
            </View>
            {/* ----------------------------------------Title---------------------------------------------- */}
            <TextInput
                style={styles.s2}
                mode={'outlined'}
                placeholder='Enter the Title'
                underlineColorAndroid="transparent"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
           {/* ------------------------------------------- Enter Info-------------------------------------- */}
            <TextInput
                style={styles.largerInput} // Increase the height of the TextInput
                mode={'outlined'}
                placeholder='Enter the Information'
                underlineColorAndroid="transparent"
                value={content}
                onChangeText={(text) => setContent(text)}
                multiline={true}
                numberOfLines={10}
                textAlignVertical="top" // Align the text to the top (left)
            />
           
        {/* -----------------------------------------upload button---------------------------------- */}
        <TouchableOpacity onPress={handleUpload}>
        <View style={{ backgroundColor: '#00BFFF', alignSelf: 'center', borderRadius: 10, margin: 10, height: 45, width: 280, }}>
          <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 18, margin: 10, }}>Upload</Text>
        </View>
      </TouchableOpacity>

                <TouchableOpacity onPress={NextActivity}>
                    {/* onPress={handleStartPress} */}
                    <View style={{ backgroundColor: '#00BFFF', alignSelf: 'center', borderRadius: 10,  height: 45, width: 280, }}>
                        <Text style={{ alignSelf: 'center', fontFamily: 'Montserrat-Bold', fontSize: 18, margin: 10, }}>Saved Notes</Text>
                    </View>

                </TouchableOpacity>
          
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 50,
        margin: 10,
    },
    text2: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        margin: 10
    },
    s1: {
        backgroundColor: '#d7f0f7',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        height: 50,
        width: 300,
        shadowRadius: 2,
        elevation: 8,
    },
    s2: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 30,
        borderColor: 'black',
        marginHorizontal: 10,
        height: 50,
        backgroundColor: 'white',
        width: 320,
        margin: 5,
        alignSelf: 'center'
    },
    largerInput: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 30,
        borderColor: 'black',
        marginHorizontal: 10,
        height: 400, // Increase the height to make it larger
        backgroundColor: 'white',
        width: 320,
        margin: 5,
        alignSelf: 'center'
    },
});

export default Createnote;
