import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";


const Home = ({ navigation }) => {
  const categories = ["All", "Coffee", "Tea", "Pizza"];

  const ModelD = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Entypo
            style={{ marginLeft: 270 }}
            name="sound"
            size={25}
            color={"red"}
          />
        </Pressable>
      </View>
    );
  };

  const Header = () => {
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
            <ModelD />
          </View>

          <Text style={{ fontSize: 30, marginBottom: 10 }}>
            Good Morning,Sakib!
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
    );
  };

  const DATA = [
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
      price: "50TK",
      picture: require("../assets/coffe1.jpg"),
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
      <Header/>
      <FlashList
    data={DATA}
    showsVerticalScrollIndicator={false}
    renderItem={({item})=>
    <View style={{backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Singleproduct')}>
      <View style={{marginLeft:30,marginRight:30,marginBottom:20}}>
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
  )}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    height: "20%",
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#F3f3f3",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Home;
