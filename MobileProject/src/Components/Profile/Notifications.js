import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Simulation of notifications
const notificationsData = [
  { id: '1', message: 'You have a new message from John.' },
  { id: '2', message: 'Your order has been shipped!' },
  { id: '3', message: 'Reminder: Meeting at 3 PM today.' },
  { id: '4', message: 'Your subscription is about to expire.' },
  { id: '5', message: 'You received a new comment on your post.' },
];

const Notifications = ({ navigation }) => {

  // Function to render each notification
  const renderNotification = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      {/* Notifications list */}
      <FlatList
        data={notificationsData}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />

      {/* go back bottom*/}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  notificationList: {
    width: '100%',
    marginBottom: 20,
  },
  notificationItem: {
    backgroundColor: '#F9F9F9',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Android effects
  },
  notificationText: {
    fontSize: 16,
    color: '#555',
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
