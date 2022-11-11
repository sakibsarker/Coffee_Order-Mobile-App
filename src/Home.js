import { View, Text,Image,ScrollView,
    TouchableOpacity,Pressable,TextInput,SafeAreaView
 } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const Home = ({navigation}) => {

  const Header=()=>{
    return (
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
      <CategoryList/>
          </View>
      </View>
    )
   }


  const categories=['All','Coffee','Tea','Pizza']
  const CategoryList=()=>{
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginTop:15}}>
        {categories.map((item,index)=>(
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View>
              <Text style={{fontWeight:'400'}}>{item}</Text>
            </View>

          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
   <View style={{backgroundColor:'white'}}>
    <Header/>
    <ScrollView style={{backgroundColor:'white'}}>
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
      </ScrollView>
   </View>
  )
}

// const styles=StyleSheet.create({
//   CategoryListContainer:{
//     height:20,
//     backgroundColor:'bue'

//   }
// })
export default Home;