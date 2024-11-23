import { View, Text, Image, StyleSheet } from 'react-native';
import Color from '../../share/Color';
import React from 'react';


//  Props - category

export default function CategoryItem({ category }) {
  return (

    // Category Item Component 
    <View style={styles.container}>
      <Image source={category.icon} style={styles.image} />
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    margin: 10,
    width: 120,
    height: 120,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  text: {
    fontSize: 10,
    fontWeight: 900,
    fontFamily: 'raleway',
    color: '#333',
  },
});