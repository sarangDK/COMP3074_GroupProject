import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native';
import CategoryItem from './CategoryItem';


// Category List Components 
export default function CategoryList({ setCategory }) {

  const categoryList = [
    {
      id: 1,
      name: "Asian Food",
      value: "restaurant",
      keyword: "asian",
      icon: require('./../../../assets/asian.jpg')
    },
    {
      id: 2,
      name: "Fast Food",
      value: "meal_takeaway",
      icon: require('./../../../assets/fastfood.jpg')
    },
    {
      id: 3,
      name: "Dessert Shop",
      value: "bakery",
      icon: require('./../../../assets/bubble_tea.png')
    },
    {
      id: 4,
      name: "Cafe",
      value: "cafe",
      icon: require('./../../../assets/cafe.png')
    },
    {
      id: 5,
      name: "Fine Dining",
      value: "restaurant",
      keyword: "fine dining",
      icon: require('./../../../assets/fine_dining.jpg')
    },
    {
      id: 6,
      name: "Bar",
      value: "bar",
      icon: require('./../../../assets/bar.jpg')
    }
  ];

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={{
        fontSize: 20,
        fontFamily: 'raleway-bold',
        textAlign: 'center'
      }}>Choose the Category</Text>

      <FlatList
      // FlatList -> Display the list of categories. 
        data={categoryList}
        // Hide the horizontal scroll bar 
        showsHorizontalScrollIndicator={false}
        // Make it horizontal
        horizontal={true}
        renderItem={({ item }) => (

          // Touchable Opacity -> When the user clicks on the category, it will set the category
          <TouchableOpacity onPress={() => setCategory(item.value, item.keyword)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}