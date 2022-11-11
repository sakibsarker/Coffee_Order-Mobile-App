import { View, Text,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const Home = ({navigation}) => {
  const categories=['All','Coffee','Tea','Pizza']
  const Header=()=>{
    return(
      <View style={{backgroundColor:'#f3f3f3',borderBottomLeftRadius:30,borderBottomRightRadius:30,marginTop:20}}>
          <View style={{marginTop:20,marginLeft:30,marginRight:30,marginBottom:10,}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image style={{height:50,width:50, borderRadius:50,marginBottom:10}} source={require('../assets/sakib.jpg')}/>
          <Entypo style={{marginTop:10}} name='sound' size={25} color={'red'}/>
            </View>
          
      <Text style={{fontSize:30,marginBottom:10}}>Good Morning,Sakib!</Text>
     
      <View style={{height:30,backgroundColor:'white',borderRadius:50,flexDirection:'row',alignItems:'center'}}>
        <Ionicons name='md-search-outline' size={15} style={{marginLeft:20}}/>
        <TextInput placeholder='Search' style={{fontSize:15,marginLeft:20}}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginTop:15}}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View>
              <Text style={{fontWeight:'400'}}>{item}</Text>
            </View>

          </TouchableOpacity>
        ))}
      </View>
          </View>
      </View>
    )
  }



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
  
  return (

    <View>
      <Header/>
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
    </View>


    // <View style={{backgroundColor:'white'}}>
    //     
    //     <Products navigation={navigation}/>
    // </View>
  )}
export default Home;