import { View, Text, StyleSheet, Image, ScrollView, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import Color from '../../share/Color';
import { Ionicons } from '@expo/vector-icons';
import GoogleMapView from '../Home/GoogleMapView';

export default function PlaceDetail() {
  const param = useRoute().params;
  const [place, setPlace] = useState(null);

  useEffect(() => {
    setPlace(param.place);
  }, [param]);

  const joinWaitingList = () => {
    Alert.alert('Joined Waiting List', `You have joined the waiting list for ${place?.name}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{place?.name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{place?.rating}</Text>
        </View>
      </View>

      {place?.photos ? (
        <Image
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
              place.photos[0].photo_reference +
              "&key=" +
              "AIzaSyCyOu-XbRZIYwaJpsCUn4lJgJAP-LdU0MM",
          }}
          style={styles.image}
        />
      ) : (
        <Image source={require('./../../../assets/placeholder.png')} style={styles.image} />
      )}

      <Text style={styles.address}>{place?.vicinity}</Text>
      <Text
        style={[
          styles.openingHours,
          { color: place?.opening_hours?.open_now ? 'green' : 'red' },
        ]}
      >
        {place?.opening_hours?.open_now ? 'OPEN' : 'CLOSED'}
      </Text>

      <View style={styles.mapContainer}>
        <GoogleMapView placeList={[place]} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Join the Waiting List" onPress={joinWaitingList} color="#007BFF" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginVertical: 20,
  },
  openingHours: {
    fontSize: 16,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    width: 100,
    alignSelf: 'center',
    borderRadius: 100,
  },
  address: {
    fontSize: 16,
    fontFamily: 'raleway-regular',
    textAlign: 'center',
    marginVertical: 10,
  },
  mapContainer: {
  
    marginLeft: 20,
    borderRadius: 20,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
});