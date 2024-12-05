import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Profile from '../Screens/Profile';
import Account from '../Components/Profile/Account';
import Notifications from '../Components/Profile/Notifications';
import Settings from '../Components/Profile/Settings';
import Help from '../Components/Profile/Help';
import Logout from '../Components/Profile/Logout';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,  
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: 'Account Details' }}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{ title: 'Notifications' }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Settings' }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{ title: 'Help' }}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{ title: 'Logout' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
