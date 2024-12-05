import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Logout = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You have been logged out.</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  homeButton: {
    padding: 10,
    backgroundColor: '#FFB522',
    borderRadius: 5,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
