import { View, Text, ScrollView } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import React from 'react';
import Headers from '../Components/Home/Header';
import GoogleMapView from '../Components/Home/GoogleMapView';
import CategoryList from '../Components/Home/CategoryList';
import PlaceList from '../Components/Home/PlaceList';
import API from "../Services/api";  
import { UserLocationContext } from '../Context/UserLocationContext';

export default function Home() {

  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      // restaurant is the default category
      GetNearBySearchplace('restaurant');
    }
  }, [location]);

  const GetNearBySearchplace = (type, keyword = '') => {
    API.nearByPlace(location.coords.latitude, location.coords.longitude, type, keyword).then(resp => {
      setPlaceList(resp.data.results);
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Headers />
      <GoogleMapView placeList={placeList} />
      <CategoryList setCategory={(type, keyword) => GetNearBySearchplace(type, keyword)} />
      {placeList.length > 0 ? <PlaceList placeList={placeList} /> : null}
    </ScrollView>
  );
}