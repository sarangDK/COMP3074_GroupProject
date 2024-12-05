import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For pen icon and profile icon

const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Details</Text>

      {/* Profile with pen icon to edit */}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={120} color="#FFB522" />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="pencil" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Basic Information */}
      <View style={styles.infoSection}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>User</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.value}>+123 456 7890</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>user.user@example.com</Text>
      </View>

      {/* Go back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
    textAlign: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  editIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFB522',
    padding: 5,
    borderRadius: 50,
  },
  infoSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  value: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#FFB522',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
