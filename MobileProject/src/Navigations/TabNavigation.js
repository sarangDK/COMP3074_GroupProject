import { View, Text, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Reservation from '../Screens/Reservation';
import Profile from '../Screens/Profile';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HomeNavigation from './HomeNavigation';
import ProfileStack from './ProfileNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  // Función común para aplicar animaciones en los iconos
  const getTabBarIcon = (name, color, focused) => {
    const scale = focused ? new Animated.Value(1.2) : new Animated.Value(1);
    const opacity = focused ? new Animated.Value(1) : new Animated.Value(0.8);

    // Animación para hacer "titilar" el icono (cambio de opacidad)
    useEffect(() => {
      if (focused) {
        const interval = setInterval(() => {
          Animated.sequence([
            Animated.timing(opacity, { toValue: 1, duration: 100, useNativeDriver: true }),
            Animated.timing(opacity, { toValue: 0.8, duration: 100, useNativeDriver: true }),
          ]).start();
        }, 200);
        return () => clearInterval(interval);
      }
    }, [focused]);

    // Animación de escala
    useEffect(() => {
      Animated.spring(scale, {
        toValue: focused ? 1.2 : 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }).start();
    }, [focused]);

    return (
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <MaterialCommunityIcons name={name} size={24} color={focused ? '#FFB522' : color} />
      </Animated.View>
    );
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* ICON for Home */}
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => getTabBarIcon('home', color, focused),
        }}
      />
      {/* ICON for Reservation */}
      <Tab.Screen
        name="Reservation"
        component={Reservation}
        options={{
          tabBarLabel: 'Reservation',
          tabBarIcon: ({ color, focused }) => getTabBarIcon('calendar-check', color, focused),
        }}
      />
      {/* ICON for Profile with "face-man-profile" */}
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => getTabBarIcon('face-man-profile', color, focused),
        }}
      />
    </Tab.Navigator>
  );
}