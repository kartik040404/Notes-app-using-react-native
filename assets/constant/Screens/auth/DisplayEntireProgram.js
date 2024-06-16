import { View, Text,  ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import database from '@react-native-firebase/database';

const DisplayEntireProgram = () => {
    const route = useRoute();
    const data = route.params.Language;
    const title = route.params.Title;
    const type = route.params.Type;
    const activity = route.params.activity;
    const [program, setProgram] = useState('');
    const [output, setOutput] = useState('');
    let ref =null;


useEffect(() => {
    
  if(activity=="Displayprg"){

    ref = database().ref(`Main/Languages/${data}/${title}/${type}`);
  }
  else{
    
    ref = database().ref(`Main/users/${data}/Notes/${title}`);
  }
    // Define the Firebase database reference path to access the specific "Program" and "Output"
    // const outputRef = database().ref(`Main/Languages/${data}/${title}/Output`);

    // Fetch the "Program" value
    ref.once('value', (snapshot) => {
        const value = snapshot.val();
        if (value) {
          // Replace "\n" characters with newlines
          const formatted = value.replace(/\\n/g, '\n');
          setProgram(formatted);
        }
      });
    
    //   outputRef.once('value', (snapshot) => {
    //     const outputValue = snapshot.val();
    //     if (outputValue) {
    //       // Replace "\n" characters with newlines
    //       const formattedOutput = outputValue.replace(/\\n/g, '\n');
    //       setOutput(formattedOutput);
    //     }
    //   });

    return () => {
      // Clean up the Firebase listeners when the component unmounts
      ref.off('value');
    //   outputRef.off('value');
    };
  }, [title]);




    return (

        <ScrollView style={{ flexDirection: 'column', marginTop: 20, alignContent: 'center', margin: 10 }}>

        <Text style={styles.text1}>{type}:</Text>

        <View style={styles.demo} >
          <ScrollView>
            {program.split('\n').map((line, index) => (
                <Text key={index} style={styles.text2}>
                {line}
              </Text>
            ))}
          </ScrollView>
        </View>
  
       
      </ScrollView>

    );
};

const styles = StyleSheet.create({
    text1:
    {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 25,
        margin: 10
    },
    text2: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        margin: 10
    },
    demo: {
        height: 650,
        width: 320,
        margin: 10,
        alignSelf: 'center',
        borderColor: '#000000',
        borderRadius: 10,
        shadowColor: '#d7f0f7',
        borderWidth: 1,
        backgroundColor: '#d7f0f7',  // Set a border color with transparency
        shadowColor: 'black', // Shadow color
        shadowRadius: 2, // Shadow radius
        elevation: 2,
    }
});
export default DisplayEntireProgram;