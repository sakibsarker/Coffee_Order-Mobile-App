import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header_title from '../components/Header_title'
import Coffeelist from '../components/Coffeelist'
import CoffeStack from '../navigation/CoffeStack'

const Home = ({navigation}) => {
  return (
    <>
    <Header_title/>
    <Coffeelist navigation={navigation}/>
    </>
      
    
  )
}

export default Home