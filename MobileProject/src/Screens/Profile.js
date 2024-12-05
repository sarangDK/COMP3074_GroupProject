import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topSection}>
          <Icon name="user-circle" size={100} color="#FFB522" />
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.membership}>Premium</Text>
        </View>

        <View style={styles.buttonList}>
          {/* Account */}
          <TouchableOpacity
            style={styles.buttonSection}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Account')} 
          >
            <View style={styles.buttonArea}>
              <Icon name="user" size={25} color="#000" style={styles.iconStyle} />
              <Text style={styles.buttonName}>Account</Text>
            </View>
          </TouchableOpacity>

          {/* Notifications */}
          <TouchableOpacity
            style={styles.buttonSection}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Notifications')} 
          >
            <View style={styles.buttonArea}>
              <Icon name="bell" size={25} color="#000" style={styles.iconStyle} />
              <Text style={styles.buttonName}>Notifications</Text>
            </View>
          </TouchableOpacity>

          {/* Settings */}
          <TouchableOpacity
            style={styles.buttonSection}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Settings')} 
          >
            <View style={styles.buttonArea}>
              <Icon name="cog" size={25} color="#000" style={styles.iconStyle} />
              <Text style={styles.buttonName}>Settings</Text>
            </View>
          </TouchableOpacity>

          {/* Help */}
          <TouchableOpacity
            style={styles.buttonSection}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Help')} 
          >
            <View style={styles.buttonArea}>
              <Icon name="question-circle" size={25} color="#000" style={styles.iconStyle} />
              <Text style={styles.buttonName}>Help</Text>
            </View>
          </TouchableOpacity>

          {/* Logout */}
          <TouchableOpacity
            style={styles.buttonSection}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Logout')} 
          >
            <View style={styles.buttonArea}>
              <Icon name="sign-out" size={25} color="#000" style={styles.iconStyle} />
              <Text style={styles.buttonName}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
  topSection: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginTop: 20,
    color: 'black',
    fontSize: 32,
  },
  membership: {
    color: '#FFB522',
    fontSize: 18,
  },
  buttonList: {
    marginTop: 20,
  },
  buttonSection: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  buttonArea: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonName: {
    fontSize: 20,
    color: 'black',
    marginLeft: 20,
  },
});
