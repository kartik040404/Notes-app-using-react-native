import React, { useState } from 'react';
import { View, Text, useColorScheme, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { Button } from 'react-native-paper';
import { Colors } from "react-native/Libraries/NewAppScreen"
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { StackActions } from "@react-navigation/native";

const GetInformation = ({ navigation }) => {
  // const { username } = route.params;
  const isDarkMode = useColorScheme() === "dark"
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  }
 
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };
  
  const [selectedAge, setSelectedAge] = useState(18); // Initial selected age is set to 18

  const data = Array.from({ length: 100 }, (_, index) => index + 1);

  const [value, setValue] = React.useState(0);
  const minValue = 0;
  const maxValue = 100;
  const step = 0.1; // Set the desired step value for floating-point numbers
  const [valuew, setValuew] = React.useState(0);
  const minValuew = 0;
  const maxValuew = 100;
  const stepw = 0.1; // Set the desired step value for floating-point numbers

  const onChangeheight = (newValue) => {
    // Manually enforce the min and max values
    if (newValue >= minValue && newValue <= maxValue) {
      setValue(newValue);
    } else if (newValue < minValue) {
      setValue(minValue);
    } else {
      setValue(maxValue);
    }
  };
  const onChangeweight = (newValuew) => {
    // Manually enforce the min and max values
    if (newValuew >= minValuew && newValuew <= maxValuew) {
      setValuew(newValuew);
    } else if (newValuew < minValuew) {
      setValuew(minValuew);
    } else {
      setValuew(maxValuew);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.ageItem, selectedAge === item && styles.selectedAgeItem]}
        onPress={() => setSelectedAge(item)}
      >
        <View style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }}>

          <Text style={[styles.ageText, selectedAge === item && styles.selectedAgeText]}>
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const handleSubmit = () => {
    const user = auth().currentUser;
    if (user) {

      firebase.database().ref('Main/users/'+user.uid+'/information/').update({
        gender: selectedGender,
        height: value,
        weight: valuew,
        age:selectedAge
      });
      firebase.database().ref('Main/users/'+user.uid).update({
        extra : false
      });
      navigation.dispatch(StackActions.replace("HomePage"));
        }
    // console.log(`Submitted age: ${selectedAge}`);
  };

  return (
    <View>
      <View>

        <Text style={{ fontWeight: 'bold', marginTop: 50, fontSize: 20, marginLeft: 20 }}>WHO YOU ARE?</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,width:300,alignSelf:'center',marginTop:30}}>

        <TouchableOpacity style={[
            styles.genderButton,
            selectedGender === 'male' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelection('male')}>
          {/* <View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderRadius: 10, width: 150, borderWidth: 1, alignSelf: 'center', height: 50 }}> */}
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>MALE</Text>
            {/* <Text>Value: {value}</Text> */}

          {/* </View> */}
        </TouchableOpacity>
        <TouchableOpacity    style={[
            styles.genderButton,
            selectedGender === 'female' && styles.selectedGenderButton,
          ]}
          onPress={() => handleGenderSelection('female')}>

          {/* <View style={{ marginLeft: 10, marginTop: 30, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderRadius: 10, width: 150, borderWidth: 1, alignSelf: 'center', height: 50 }}> */}
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>FEMALE</Text>
            {/* <Text>Value: {value}</Text> */}

          {/* </View> */}
        </TouchableOpacity>

      </View>

      <View>

        <Text style={{ fontWeight: 'bold', marginTop: 30, fontSize: 20, marginLeft: 20 }}>HEIGHT</Text>
      </View>
      <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
        <NumericInput
          value={value}
          onChange={onChangeheight}
          minValue={minValue}
          maxValue={maxValue}
          step={step}
          valueType='real'
        />
        {/* <Text>Value: {value}</Text> */}

      </View>




      <View>

        <Text style={{ fontWeight: 'bold', marginTop: 30, fontSize: 20, marginLeft: 20 }}>WEIGHT</Text>
      </View>
      <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}>
        <NumericInput
          value={valuew}
          onChange={onChangeweight}
          minValue={minValuew}
          maxValue={maxValuew}
          step={stepw}
          valueType='real'
        />
        {/* <Text>Value: {value}</Text> */}

      </View>

      <View>

        <Text style={{ fontWeight: 'bold', marginTop: 40, fontSize: 20, marginLeft: 20 }}>HOW OLD ARE YOU?</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.ageListContainer}
        />
        {/* <View style={styles.selectedAgeContainer}>
        <Text style={styles.selectedAge}>Selected Age: {selectedAge}</Text>
      </View> */}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {selectedGender && (
        <Text style={styles.selectedGenderText}>Selected Gender: {selectedGender}</Text>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 300,
    marginTop: 50,
    alignSelf: 'center',
    // Adjust the height as per your requirement
  },
  ageListContainer: {
    paddingHorizontal: 16,
  },
  ageItem: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  ageText: {
    fontSize: 16,
    color: '#444',
    marginTop: 8,
    fontWeight: 'bold'
  },
  selectedAgeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  selectedAge: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  selectedAgeItem: {
    backgroundColor: '#007BFF',
  },
  selectedAgeText: {
    color: '#fff',
  },

  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 40,
    width: 200,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  genderButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedGenderButton: {
    backgroundColor: '#ccc',
  },
  genderText: {
    fontSize: 16,
  },
  selectedGenderText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default GetInformation;
