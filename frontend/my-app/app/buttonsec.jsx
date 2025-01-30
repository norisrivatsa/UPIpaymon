import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function buttonsec() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.setlimt}  activeOpacity={0.7}  onPress={() => navigation.navigate('limits')}>Set Limit</TouchableOpacity>
      <TouchableOpacity style={styles.expinfo}  activeOpacity={0.7}>Detailed Exp Info</TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection : "row",
        justifyContent: "space-evenly",
        alignItems:"center",
        position: "relative",
        top: 20,
        height: "10%",
        width: "90%",
        left: "5%",
        borderColor: "black",
        borderWidth : 2,
        borderStyle: "solid",
    },
    setlimt:{
        width: "40%",
        height: "80%",
        backgroundColor: "green",
        color :"white",
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
    },
    expinfo : {
        width: "40%",
        height: "80%",
        backgroundColor: "red",
        color :"white",
        textAlign: "center",
        padding: 10,
        borderRadius: 15,
    }
})