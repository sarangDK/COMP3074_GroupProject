import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Home from '../Screens/Home';
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS
      }}
    >
      {/* navigation home  */}
      <Stack.Screen name="home-screen" component={Home} />

      {/* navigation to go place - detail */}
      <Stack.Screen
        name="place-detail"
        component={PlaceDetail}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}