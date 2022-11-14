import { View, Text,Button } from 'react-native'
import React from 'react'

const CallingWorker = () => {
  return (
    <View style={{backgroundColor:'white',height:'100%',width:'100%',alignItems:'center'}}>
      <View style={{flexDirection:'row',marginLeft:'30%',marginRight:'30%',marginTop:'50%'}}>
        <View style={{backgroundColor:'green',height:100,width:100,alignItems:'center',borderRadius:50}}>
          <Text style={{color:'white',fontSize:20,marginTop:"33%"}}>Call</Text>
        </View>
      </View>
      <View style={{alignItems:'center',marginTop:30}}>
        <Text style={{fontSize:30,fontWeight:'500',color:'green'}}>Calling...</Text>
        <Text style={{fontSize:15,fontWeight:'400',marginTop:10,color:'red'}}>1:50 Minutes Left</Text>
      </View>
    </View>
  )
}

export default CallingWorker