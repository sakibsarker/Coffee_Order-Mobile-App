import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import History from '../src/History';
import Profile from '../src/Profile';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';



const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} options={{
        headerShown:false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          < Octicons name="home" color={color} size={20} />
        ),
      }} />
        <Tab.Screen name="History" component={History} 
        options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="history" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Profile" component={ProfileStack}
      options={{
        headerShown:false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-outline" color={color} size={size} />
        ),
      }}
      />
      </Tab.Navigator>
  )
}

export default BottomTab