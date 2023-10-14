import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForecastScreen from '../screens/ForecastScreen';
import HomePage from '../screens/HomePage';
import Settings from '../screens/Settings';
import { LogBox, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME PAGE" options={{headerShown: true}} component={HomePage} />
        <Stack.Screen name="forecast" options={{headerShown: false}} component={ForecastScreen} />
        <Stack.Screen name="SETTINGS" options={{headerShown: true}} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
