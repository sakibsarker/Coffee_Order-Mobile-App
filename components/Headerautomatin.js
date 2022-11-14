import {View,Text,Image,TouchableOpacity,TextInput} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Modals from "./Modals";
import Entypo from "react-native-vector-icons/Entypo";

const Headerautomation = ({navigation}) => {


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
      </View>

      <Text style={{ fontSize: 30, marginBottom: 10,fontWeight:'300' }}>
        Good Morning, Sakib!
      </Text>
    </View>
  </View>
  )
}


export default Headerautomation