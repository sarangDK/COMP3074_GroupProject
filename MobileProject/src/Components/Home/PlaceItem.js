import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { API_KEY } from './../../Services/api';

export default function PlaceItem({ place }) {
  if (!place) {
    return null;
  }

  return (
    <View style={styles.container}>
      {place?.photos ? <Image
        source={{uri:
          "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" +
          place.photos[0].photo_reference +
          "&key=" +"AIzaSyCyOu-XbRZIYwaJpsCUn4lJgJAP-LdU0MM",
          
        }}
        style={styles.image}
      />: 
      <Image
        source={require('./../../../assets/placeholder.png')}
        style={styles.image}
      /> }
      <View style={styles.textContainer}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.vicinity}>{place.vicinity}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  vicinity: {
    fontSize: 14,
    color: '#666',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
});