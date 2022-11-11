import { View, Text,Image,ScrollView,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'

const DATA=[
  {
    productname:"Chocolate",
    price:"35TK",
    picture:require('../assets/coffe1.jpg'),
  },
  {
    productname:"Chocolate",
    price:"50TK",
    picture:require('../assets/coffe1.jpg'),

  },
  {
    productname:"Chocolate",
    price:"50TK",
    picture:require('../assets/coffe1.jpg'),

  }
]

const Products = ({navigation}) => {

  return (
    <View style={{width:'100%',height:'100%'}}>
      <FlashList
    data={DATA}
    renderItem={({item})=>
    <View style={{backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Single')}>
      <View style={{marginLeft:30,marginRight:30,marginTop:10}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={item.picture}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'500'}}>{item.productname}</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'400',fontSize:15}}>{item.price}</Text>
      </View>
      </View>
      </TouchableOpacity>
   </View>
  }
    estimatedItemSize={200}
    />
    </View>
    
  )
}

// const styles=StyleSheet.create({
//   CategoryListContainer:{
//     height:20,
//     backgroundColor:'bue'

//   }
// })
export default Products;