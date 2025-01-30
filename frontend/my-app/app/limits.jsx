import { View, Text, SafeAreaView,StyleSheet,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function limits() {
    const [isEditing, setIsEditing] = useState(false);
    const [number1, setNumber1] = useState("100"); // First number
    const [number2, setNumber2] = useState("200");
  return (
   <SafeAreaView>
    <View style = {styles.container}>
        <Text>Monthly Limits</Text>
        {isEditing ? (
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number1}
          onChangeText={setNumber1}
          autoFocus
        />
        ) : (
        <Text style={styles.numberText}>{number1}</Text>
        )}
        <Text>Daily Limtis</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={number2}
            onChangeText={setNumber2}
          />
        ) : (
          <Text style={styles.numberText}>{number2}</Text>
        )}
      <TouchableOpacity style={styles.button} onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.buttonText}>{isEditing ? "Save" : "Edit"}</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      position: "fixed",
      top: "10%",
      left: "35%",
      padding: 20,
      display : 'flex',
      flexDirection: "column",
      justifyContent : "space-evenly",
      height : "60%",
      backgroundColor : "blue"
    },
    numberText: {
      fontSize: 18,
      backgroundColor:"antiquewhite",
      padding:10,
      borderRadius:15,
    },
    input: {
      borderBottomWidth: 1,
      fontSize: 18,
      padding: 10,
      width: 100,
      textAlign: "center",
    },
    button: {
      marginTop: 10,
      backgroundColor: "red",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
      fontSize: 16,
    },
  });