import {View,Text,Image,TouchableOpacity,TextInput} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modals from "./Modals";
import Entypo from "react-native-vector-icons/Entypo";
const Header = ({navigation}) => {


const categories = ["All", "Coffee", "Tea", "Pizza"];
  return (
    <View
    style={{
      backgroundColor: "#f3f3f3",
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginTop: 20,
    }}
  >
    <View
      style={{
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
      }}
    >
      <View
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            marginBottom: 10,
          }}
          source={require("../assets/sakib.jpg")}
        />
        <TouchableOpacity onPress={()=>navigation.navigate('Staff')}>
        <Entypo
            style={{ marginLeft: 250,marginTop:5 }}
            name="sound"
            size={35}
            color={"red"}
          />
          </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 30, marginBottom: 10,fontWeight:'300' }}>
        Good Morning, Sakib!
      </Text>

      <View
        style={{
          height: 30,
          backgroundColor: "white",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="md-search-outline"
          size={15}
          style={{ marginLeft: 20 }}
        />
        <TextInput
          placeholder="Search"
          style={{ fontSize: 15, marginLeft: 20 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 30,
          marginTop: 15,
        }}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8}>
            <View>
              <Text style={{ fontWeight: "400" }}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
  )
}


export default Header