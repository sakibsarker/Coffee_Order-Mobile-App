import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../src/Home';
import Single from '../src/Single';
const Stack=createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home} options={{
        headerShown:false
        }}/>
        <Stack.Screen name='Single' component={Single}/>
    </Stack.Navigator>
  )
}

export default HomeStack