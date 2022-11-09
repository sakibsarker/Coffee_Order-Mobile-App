import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header_title from '../components/Header_title'
import Homecoffeelist from '../components/Homecoffeelist'
import CoffeStack from '../navigation/CoffeStack'

const Home = () => {
  return (
    <>
    <Header_title/>
     <Homecoffeelist/>
    </>
      
    
  )
}

export default Home