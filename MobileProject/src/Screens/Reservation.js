import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Reservation() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleReservation = () => {
    // Handle reservation logic here
    Alert.alert('Reservation Confirmed', `Name: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Reservation</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Date (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Guests"
        value={guests}
        onChangeText={setGuests}
        keyboardType="numeric"
      />
      <Button title="Reserve" onPress={handleReservation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});