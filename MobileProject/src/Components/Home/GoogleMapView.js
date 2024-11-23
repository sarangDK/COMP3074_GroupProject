import { View, Text, Dimensions, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useContext, useState, useEffect} from 'react';
import React from 'react';
import { UserLocationContext } from '../../Context/UserLocationContext';
import PlaceMarker from './PlaceMarker';


export default function GoogleMapView({placeList}) {

  // set varable for map region / Zoom level

  const [mapRegion, setMapRegion] = useState(null);

  const { location, setLocation } = useContext(UserLocationContext);

 


  // Update the map region whenever the location changes 
  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [location]);

  
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {mapRegion && (
          <MapView
            style={styles.viewMap}
            provider={PROVIDER_GOOGLE}
            // built in function to show USER location
            showsUserLocation={true}
            region={mapRegion}
          >
            <Marker title="You are here!"
              coordinate={mapRegion}
              />
              {placeList.map((item, index) => (
                <PlaceMarker item={item} />
              ))}
          </MapView>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "700",
    fontFamily: 'raleway-bold'
  },
  mapContainer: {
    borderRadius: 20,
    overflow: "hidden",
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height / 2.8,  
  },
  viewMap: {
    flex:1,
  }

});