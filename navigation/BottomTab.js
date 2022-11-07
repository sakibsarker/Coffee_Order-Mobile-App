import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/Home';
import Shop from '../src/Shop';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-circle-outline" color={color} size={size} />
        ),
      }} />
        <Tab.Screen name="Coffee" component={Shop} 
        options={{
        tabBarLabel: 'Coffee',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="coffee" color={color} size={size} />
        ),
      }} />
      </Tab.Navigator>
  )
}

export default BottomTab