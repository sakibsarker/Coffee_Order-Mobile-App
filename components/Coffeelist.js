import { View, Text,Image,StyleSheet,ScrollView } from 'react-native'
import React from 'react'

const Coffeelist = () => {
  return (
   <ScrollView>
    <View>
      <View style={{margin:30}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../assets/coffe1.jpg')}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>Chocolate Coffee</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>50tk</Text>
      </View>
      </View>


      <View style={{margin:30}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../assets/coffe1.jpg')}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>Chocolate Coffee</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>50tk</Text>
      </View>
      </View>

      <View style={{margin:30}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../assets/coffe1.jpg')}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>Chocolate Coffee</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>50tk</Text>
      </View>
      </View>
    </View>
   </ScrollView>
  )
}

export default Coffeelist