import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Coffeelist = () => {
  return (
    <View style={{marginTop:30}}>
      <View style={{width:"100%",height:"100%"}}>
      <Image style={{width:'100%',height:"30%",borderRadius:20}} source={require('../assets/coffe1.jpg')}/>
      </View>
     
    </View>
  )
}

export default Coffeelist