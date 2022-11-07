import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const Header_title = () => {
  return (
    <View>
        <View style={{marginTop:20}}>
        <Image style={{height:50,width:50, borderRadius:50,marginBottom:10}} source={require('../assets/sakib.jpg')}/>
    <Text style={{fontSize:35,marginRight:28}}>Good Morning,Sakib!</Text>
        </View>
    
    </View>
  )
}

export default Header_title