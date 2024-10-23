import React from 'react';
import { Stack } from 'expo-router'; // Import Stack from expo-router
import HomeScreen from '.';
import ProfileScreen from './profilescreen'
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  return (
   <>
    <StatusBar style='light' backgroundColor='black' />
    <Stack  screenOptions={{headerShown:false}}/>  
   </>
  );
}

export default Layout;
