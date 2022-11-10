import { View, Text,StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header_title = () => {
  return (
    <View>
        <View style={{marginTop:20,marginLeft:30,marginRight:30,marginBottom:10}}>
        <Image style={{height:50,width:50, borderRadius:50,marginBottom:10}} source={require('../assets/sakib.jpg')}/>
    <Text style={{fontSize:30,marginBottom:10}}>Good Morning,Sakib!</Text>
    <View style={{height:30,backgroundColor:'white',borderRadius:50,flexDirection:'row',alignItems:'center'}}>
      <Ionicons name='md-search-outline' size={15} style={{marginLeft:20}}/>
      <TextInput placeholder='Search' style={{fontSize:15,marginLeft:20}}/>
    </View>
        </View>
    
    </View>
  )
}

export default Header_title