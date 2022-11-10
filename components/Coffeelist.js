import { View, Text,Image,StyleSheet,ScrollView,TouchableOpacity,Pressable } from 'react-native'
import React from 'react'

const Coffeelist = ({navigation}) => {
  return (
   <ScrollView>
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Singlecoffee')}>
      <View style={{margin:30}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../assets/coffe1.jpg')}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>Chocolate Coffee</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>50tk</Text>
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Single')}>
      <View style={{margin:30}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={require('../assets/coffe1.jpg')}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>Chocolate Coffee</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>30tk</Text>
      </View>
      </View>
      </TouchableOpacity>


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