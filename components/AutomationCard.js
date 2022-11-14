import {View,Text,Image,TouchableOpacity} from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import Headerfood from "./Headerfood";

const AutomationCard = ({navigation}) => {
    const DATA = [
        {
          productname: "Normal Coffee",
          price: "35TK",
          picture: require("../assets/coffe1.jpg"),
        },
        {
          productname: "Chocolate Coffee",
          price: "50TK",
          picture: require("../assets/coffe2.jpg"),
        },
        {
          productname: "Black Coffee",
          price: "50TK",
          picture: require("../assets/coffe1.jpg"),
        },
        {
          productname: "Chocolate Coffee",
          price: "35TK",
          picture: require("../assets/coffe1.jpg"),
        },
        {
          productname: "Normal Coffee",
          price: "50TK",
          picture: require("../assets/coffe2.jpg"),
        },
        {
          productname: "Chocolate",
          price: "50TK",
          picture: require("../assets/coffe2.jpg"),
        },
        {
          productname: "Chocolate",
          price: "35TK",
          picture: require("../assets/coffe1.jpg"),
        },
        {
          productname: "Chocolate",
          price: "50TK",
          picture: require("../assets/coffe2.jpg"),
        },
        {
          productname: "Chocolate",
          price: "35TK",
          picture: require("../assets/coffe1.jpg"),
        },
      ];
    
  return (
    <View>
    <View style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <Headerfood navigation={navigation}/>
      <FlashList
    data={DATA}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>
    <View style={{backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Singleproduct')}>
      <View style={{marginLeft:30,marginRight:30,marginBottom:20}}>
      <Image style={{height:150,width:'100%',borderTopLeftRadius:20,borderTopRightRadius:20}} source={item.picture}/>
      <View style={{backgroundColor:'black',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
        <Text style={{color:'white',marginTop:10,marginLeft:20,fontSize:15,fontWeight:'400'}}>{item.productname}</Text>
        <Text style={{color:'white',marginBottom:10,marginLeft:20,fontWeight:'300',fontSize:12}}>{item.price}</Text>
      </View>
      </View>
      </TouchableOpacity>
   </View>
  }
    estimatedItemSize={200}
    />
    </View>
    </View>
  )
}

export default AutomationCard