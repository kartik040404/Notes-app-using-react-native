import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import database from '@react-native-firebase/database';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const ProgramList = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const  data  = route.params.data;
  const  activity  = route.params.activity;

  const [keyNames, setKeyNames] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  let languagesCRef = null; // Declare the reference variable

  useEffect(() => {
    if (activity === "HomePage") {
      languagesCRef = database().ref(`Main/Languages/${data}`);
    } else {
      languagesCRef = database().ref(`Main/users/${data}/Notes`);
    }

    const listener = languagesCRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const keyNamesArray = Object.keys(data);
        setKeyNames(keyNamesArray);
      }
    });

    return () => {
      listener && languagesCRef.off('value', listener); // Remove the listener
    };
  }, [activity, data]);

  const filteredKeyNames = keyNames.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const NextActivity = (title) => {
    if(activity=="HomePage"){
      navigation.navigate("Displayprg", { Language: data, Title: title });

    }
    else{
      navigation.navigate("DisplayEntireProgram", { Language: data, Title: title ,Type:title,activity:"CreateNote"});

    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TextInput
          theme={{ roundness: 10, colors: { primary: 'black' } }}
          mode='outlined'
          outlineColor='black'
          placeholder="Search Titles"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.searchBar}
          left={<TextInput.Icon icon="magnify" />}
          />
        <FlatList
          data={filteredKeyNames}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.gridItem} onPress={() => NextActivity(item)}>
              <Text style={styles.languagesText}>{index + 1}. </Text>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={[
                  styles.languagesText,
                  item.length > 20 ? { fontSize: 16 } : null
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    elevation: 5,
    backgroundColor: '#fff8dc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 60,
    width: 350,
    borderColor: 'black',
    borderWidth: 1,
  },
  languagesText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
  searchBar: {
    height: 50,
    marginTop: 8,
    color: 'black',
    width: 350,
    alignSelf: 'center',
    marginBottom: 10,
  }
});

export default ProgramList;
