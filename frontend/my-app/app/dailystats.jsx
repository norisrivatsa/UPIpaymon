import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

export default function Dailstats() {
  return (
   <SafeAreaView>
    <View style ={styles.daily}>
        <Text style={styles.boldText}>Spent Today</Text>
        <View style={styles.dailynums}>
        <Text>₹450</Text>
        <Text>+₹200</Text>
        </View>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    daily : {
        position : "relative",
        left: "5%",
        width: "90%",
        display: "flex",
        flexDirection : "column",
        padding :20 ,
        gap : 20,
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        // borderColor: "black",
        // borderWidth : 2,
        // borderStyle: "solid",
        borderRadius: 20,
    },
    boldText: {
        fontWeight: "bold", // Make this part bold
      },
    dailynums : {
        display :"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        fontSize : 24,
    }, 
})