import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../src/Home';
import Singleproduct from '../src/Singleproduct';
import CallingWorker from '../src/CallingWorker';
const Stack=createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={Home} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='Singleproduct' component={Singleproduct} options={{
          headerShown:false
        }}/>
        <Stack.Screen name='calling' component={CallingWorker}/>
    </Stack.Navigator>
  )
}

export default HomeStack