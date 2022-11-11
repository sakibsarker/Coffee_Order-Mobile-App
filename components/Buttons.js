import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Buttons = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttontext}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:50,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'black',
    },
    buttontext:{
        color:'white',
        fontWeight:'400',
        textTransform:'uppercase',
        fontSize:15,
        textAlign:'center'
    }
})

export default Buttons