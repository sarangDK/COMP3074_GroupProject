import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Reservation from '../Screens/Reservation';
import Profile from '../Screens/Profile';
// import icons from expo icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeNavigation from './HomeNavigation';

export default function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{  // hide the header
      headerShown: false
    }}>
      {/* ICON change for tab navigatior */}
      <Tab.Screen name="Home" component={HomeNavigation} 
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color="black" /> 
          ),
        }}
      />
      <Tab.Screen name="Reservation" component={Reservation}
        options={{
          tabBarLabel: "Reservation",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-check" size={24} color="black" /> 
          ),
        }} 
      />
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-man-profile" size={24} color="black" /> 
          ),
        }} 
      />
    </Tab.Navigator>
  );
}