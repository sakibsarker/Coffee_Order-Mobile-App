import {View,Text,StyleSheet,Modal,Alert,Pressable} from "react-native";
import React, { useState } from "react";

import Entypo from "react-native-vector-icons/Entypo";

const Modals = () => {
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
                style={[styles.button, styles.buttonCloseNo]}
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
            style={{ marginLeft: 250 }}
            name="sound"
            size={25}
            color={"red"}
          />
        </Pressable>
      </View>
  )
}

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
      borderRadius:50,
      padding: 20,
    },
    buttonOpen: {
      backgroundColor: "#F3f3f3",
    },
    buttonClose: {
      backgroundColor: "black",
    },
    buttonCloseNo: {
      backgroundColor: "red",
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


export default Modals