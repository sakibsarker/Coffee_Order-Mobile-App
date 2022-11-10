import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Single_coffee from '../src/Single_coffee';
import Coffeelist from '../components/Coffeelist';
import Single from '../src/Single';
const Stack=createNativeStackNavigator();
const CoffeStack = () => {
  return (
    <Stack.Navigator initialRouteName='Coffelist'>
        <Stack.Screen name='Coffelist' component={Coffeelist}/>
        <Stack.Screen name='Singlecoffee' component={Single_coffee}/>
        <Stack.Screen name='Single' component={Single}/>
    </Stack.Navigator>
  )
}

export default CoffeStack