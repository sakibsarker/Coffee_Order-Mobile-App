import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../src/Home';
import History from '../src/History';
import Cart from '../src/Cart';
import Coffeelist from '../components/Coffeelist';
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Coffee" component={Home} options={{
        tabBarLabel: 'Coffee',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="coffee-outline" color={color} size={size} />
        ),
      }} />
        <Tab.Screen name="History" component={History} 
        options={{
        tabBarLabel: 'History',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="history" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Cart" component={Coffeelist}
      options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart-variant" color={color} size={size} />
        ),
      }}
      />
      </Tab.Navigator>
  )
}

export default BottomTab