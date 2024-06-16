import { View, Text,  ScrollView, StyleSheet,  TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useState,useEffect } from 'react';
import database from '@react-native-firebase/database';
import { StackActions,useNavigation } from "@react-navigation/native";

const Displayprg = () => {
    const navigation=useNavigation();

    const route = useRoute();
    const data = route.params.Language;
    const title = route.params.Title;
    const [program, setProgram] = useState('');
    const [output, setOutput] = useState('');
    
    const NextActivity = (type) => {

        navigation.navigate("DisplayEntireProgram",{Language:data,Title:title,Type:type,activity:"Displayprg"})
      
     };


useEffect(() => {
    // Define the Firebase database reference path to access the specific "Program" and "Output"
    const programRef = database().ref(`Main/Languages/${data}/${title}/Program`);
    const outputRef = database().ref(`Main/Languages/${data}/${title}/Output`);

    // Fetch the "Program" value
    programRef.once('value', (snapshot) => {
        const programValue = snapshot.val();
        if (programValue) {
          // Replace "\n" characters with newlines
          const formattedProgram = programValue.replace(/\\n/g, '\n');
          setProgram(formattedProgram);
        }
      });
    
      outputRef.once('value', (snapshot) => {
        const outputValue = snapshot.val();
        if (outputValue) {
          // Replace "\n" characters with newlines
          const formattedOutput = outputValue.replace(/\\n/g, '\n');
          setOutput(formattedOutput);
        }
      });

    return () => {
      // Clean up the Firebase listeners when the component unmounts
      programRef.off('value');
      outputRef.off('value');
    };
  }, [title]);




    return (

        <ScrollView style={{ flexDirection: 'column', marginTop: 30, alignContent: 'center', margin: 10 }}>
        <Text style={styles.text1}>Program</Text>

        <View style={styles.demo}>
          <ScrollView>
            {program.split('\n').map((line, index) => (
                <Text key={index} style={styles.text2} onPress={()=>NextActivity("Program")}>
                {line}
              </Text>
            ))}
          </ScrollView>
        </View>
  
        <Text style={styles.text1}>Output</Text>
        <View style={styles.demo}>
          <ScrollView>
            {output.split('\n').map((line, index) => (
              <Text key={index} style={styles.text2} onPress={()=>NextActivity("Output")}>
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
        height: 250,
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
        elevation: 8,
    }
});
export default Displayprg;