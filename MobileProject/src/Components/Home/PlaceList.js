import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'
import { useNavigation } from '@react-navigation/core'


export default function PlaceList({placeList}) {

  // navigaton to go to place detail
  const navigator = useNavigation();
  const onPlaceClick = (item) => {
    navigator.navigate('place-detail', {place:item});
  }

    
  return (
    <View>
      
       
      <Text style={{fontSize:20, marginTop:10, fontFamily: "raleway-bold", textAlign: "center"}}>
        Found {placeList.length} Places
      </Text>

      <FlatList
      data={placeList}
      renderItem={({item}) => (
        
        // When user clicks on the place, it will trigger the function onPlaceClick 
        // and navigate to the place detail screen
      <TouchableOpacity onPress= {() => onPlaceClick(item)}>
        <PlaceItem place={item}/>
      </TouchableOpacity>
      )}
      />
    </View>
  )
}