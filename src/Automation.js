import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Headerautomation from '../components/Headerautomatin'
const Automation = ({navigation}) => {
  return (
    <View>
      <View>
        <Headerautomation/>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Autofood')}>
            <View style={{backgroundColor:'white',height:150,width:150,alignItems:'center',borderRadius:100}}>
                <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Food</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Staff')}>
            <View style={{backgroundColor:'white',height:150,width:150,alignItems:'center',borderRadius:100,marginLeft:30}}>
                <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Staff</Text>
            </View>
            </TouchableOpacity>
        </View>

        <View style={{flexDirection:'row',justifyContent:'center',marginTop:100}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Fan')}>
            <View style={{backgroundColor:'white',height:150,width:150,alignItems:'center',borderRadius:100}}>
                <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Fan</Text>
            </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Light')}>
            <View style={{backgroundColor:'white',height:150,width:150,alignItems:'center',borderRadius:100,marginLeft:30}}>
                <Text style={{marginTop:'40%',fontSize:15,fontWeight:'500'}}>Light</Text>
            </View>
            </TouchableOpacity>
        </View>

        <View>

        </View>
      </View>
    </View>
  )
}

export default Automation