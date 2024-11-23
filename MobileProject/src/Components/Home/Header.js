import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Color from './../../share/Color';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to JUSTIN</Text>
      <Image
        source={require('./../../../assets/placeholder.png')}
        style={styles.userImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Color.white,
    borderRadius: 100,
    marginTop: 20,
    
  },
  welcomeText: {
    fontSize: 20,
    alignItems: 'center',
    fontFamily: 'raleway-bold',
    color: '#333',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});