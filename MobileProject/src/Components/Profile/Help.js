import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Help = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;

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
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFB522',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
