import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Monthstats() {
  return (
   <SafeAreaView>
    <View style={styles.month}>
      <Text style= {styles.boldText}>Spent so far(monthly)</Text>
      <View style= {styles.monthnums}>
      <Text>₹20,000</Text>
      <Text> +₹3000</Text> 
      </View>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
    month : {
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
    monthnums : {
        display :"flex",
        flexDirection : "row",
        justifyContent : "space-between",
        fontSize : 24,
    },
});