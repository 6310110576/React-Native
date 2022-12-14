import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator()
export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Choose a zip code" component = {ZipCodeScreen}/>
        <Stack.Screen name = "Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}