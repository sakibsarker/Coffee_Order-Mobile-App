import { View, Text,Image} from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";

const NotifyData=[
  {
    Productnames:"Chocolate Coffee",
    Date:"02 November 2022",
    Img:require('../assets/coffe2.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"05 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"12 November 2022",
    Img:require('../assets/coffe2.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe2.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe2.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe1.jpg')
  },
  {
    Productnames:"Chocolate Coffee",
    Date:"22 November 2022",
    Img:require('../assets/coffe2.jpg')
  },
  
]

const History = () => {
  return (
     <View width={'100%'} height={'100%'}>
      <FlashList
      data={NotifyData}
      renderItem={({item})=>
      <View style={{borderBottomColor:'#f3f3f3',
      borderBottomWidth:2,backgroundColor:'white',borderRadius:50,borderTopWidth:2,borderTopColor:'#f3f3f3'}}>
      <View style={{flexDirection:'row'}}>
        <Image style={{width:50,height:50,marginLeft:20,marginTop:10}} source={item.Img}/>
        <Text style={{fontWeight:'400',fontSize:15,marginTop:10,marginLeft:20}}>{item.Productnames}</Text>
      </View>
      <Text style={{marginLeft:'25%',fontSize:10,fontWeight:'400',marginTop:-20,marginBottom:10}}>{item.Date}</Text>
      </View>
    }
    estimatedItemSize={100}
      />
  </View>
    
  )
}

export default History