import { View, Text } from 'react-native'
import { Marker } from 'react-native-maps'
import React from 'react'

export default function PlaceMarker({item}) {
  return (
    <Marker title={item.name}
    coordinate={
    {
      latitude: item.geometry.location.lat,
      longitude: item.geometry.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }
    }

    />
  )
}