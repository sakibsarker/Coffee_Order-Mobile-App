import { View, Text,Image,Button } from 'react-native'
import React, { useState } from 'react'
import NumericInput from 'react-native-numeric-input'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Buttons from '../components/Buttons';
const Singleproduct = () => {
  const [value,setValue]=useState(0);
  return (
    <View>
    <View style={{margin:30}}>
     <Image style={{width:'100%',height:300,borderRadius:50}} source={require('../assets/coffe1.jpg')}/>
     <View style={{alignItems:'center', margin:50}}>
     <Text style={{fontSize:20,fontWeight:'600'}}>Chocolate Coffee</Text>
     <Text style={{fontSize:20, fontWeight:'300',marginTop:10,marginBottom:10}}>30 TK</Text>
     <NumericInput 
     value={value} 
     totalWidth={140} 
     totalHeight={30}
     iconSize={25}
     step={1}
     maxValue={15}
     minValue={0} 
     borderColor={Colors.deepGray}
     rounded
     textColor={Colors.black}
     iconStyle={{color:Colors.white}}
     rightButtonBackgroundColor={'black'}
     leftButtonBackgroundColor={'black'}
     
     />
     </View>
     <Buttons text='Order Now'/>
   </View>
   </View>
  )
}

export default Singleproduct