import { View, Text,Button } from 'react-native'
import React from 'react'

const Fan = () => {

  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:'70%'}}>
      <Button title='On' color={'green'}/>
      <Button title='Off' color={'red'}/>
    </View>
    <View style={{alignItems:'center'}}>
    <Text style={{fontSize:15,fontWeight:'400',marginTop:50}}>15 Hours Running</Text>
    </View>
    
    </View>
    
  )
}



export default Fan