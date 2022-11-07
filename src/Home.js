import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header_title from '../components/Header_title'
import Coffeelist from '../components/Coffeelist'

const Home = () => {
  return (
    <View>
      <Header_title/>
      <Coffeelist/>
    </View>
  )
}

export default Home