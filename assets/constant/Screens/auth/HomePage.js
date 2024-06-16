import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  const [stepCount, setStepCount] = useState(0);
  const [lastShakeTime, setLastShakeTime] = useState(0);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const userDataRef = database().ref(`Main/users/${userId}`);
        const snapshot = await userDataRef.once('value');
  
        if (snapshot.exists()) {
          const userData = snapshot.val();
          const userName = userData.Name;
          const userUsername = userData.Username;
          setName(userName);
          setUsername(userUsername);
          console.log('Name:', userName);
          console.log('Username:', userUsername);
        } else {
          console.log('User not found or data fields do not exist.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const user = auth().currentUser;
    if (user) {
      const uid = user.uid;
      setUserUid(uid);
      fetchUserData(uid); // Call fetchUserData after setting userUid
    }
  }, []);

  const handleCClick = (language) => {
    navigation.navigate("ProgramList", { data: language, activity: "HomePage" });
  };

  const NextActivity = () => {
    navigation.navigate("Noteprofile");
  };

  const NextActivity1 = () => {
    navigation.navigate("Createnote", { data: userUid });
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: 'column' }}>

        <TouchableOpacity style={styles.touchable} activeOpacity={0.7} onPress={NextActivity}>
          <View style={styles.profileLogo}>
            <Icon name="user" size={80} color="black" style={{ alignSelf: 'center' }} />
          </View>

          <View style={styles.progfileText}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black' }}>
              Name:
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
              {name}
            </Text>

            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'black', marginTop: 10 }}>
              Username:
            </Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>
              {username}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 20, marginTop: 20, fontFamily: "Montserrat-SemiBold" }}>
          Programming Languages:
        </Text>

        <View style={styles.container}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.gridItem} onPress={() => handleCClick('C')}>
              <Text style={styles.languagesText}>
                C
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.gridItem} onPress={() => handleCClick('Java')}>
              <Text style={styles.languagesText}>
                Java
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.column}>
            <TouchableOpacity style={styles.gridItem} onPress={() => handleCClick('C++')}>
              <Text style={styles.languagesText}>
                C++
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gridItem} onPress={() => handleCClick('Python')}>
              <Text style={styles.languagesText}>
                Python
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container1}>
          <TouchableOpacity style={styles.button} onPress={NextActivity1}>
            <Icon name="plus" size={30} color="white" />
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#d7f0f7',
    height: 170,
    width: 300,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 40,
    borderColor: 'black',
    marginBottom: 10,
    borderWidth: 1,
    elevation: 5,
    flexDirection: 'row'
  },
  profileLogo: {
    borderColor: 'black',
    borderWidth: 1,
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 45,
    marginLeft: 20
  },
  progfileText: {
    marginLeft: 20,
    height: 130,
    alignSelf: 'center',
    width: 150,
    marginTop: 20
  },
  container: {
    paddingTop: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  column: {
    flex: 1,
    paddingHorizontal: 5,
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#fff8dc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    height: 130
  },
  languagesText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    margin: 16,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
});

export default HomePage;
