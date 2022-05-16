import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
export default function Search({setTerm}) {
    const [input, setInput] = useState("")
    const handleEndEditing = () =>{
        if(!input) return
        setTerm(input)
        setInput("")
    }
  return (
    <View style={[styles.elevation,styles.inputContainer]}>
      <FontAwesome name="search" size={25} />
      <TextInput 
      style={styles.input} 
      placeholder="Restaurant,Foods"
      value={input}
      onChangeText={(text)=>{
          setInput(text);
      }}
      onEndEditing={handleEndEditing} />
    </View>
  );
};
const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginHorizontal: 25,
      backgroundColor: "white",
      padding: 15,
      borderRadius: 40,
      flexDirection: "row",
    },
    elevation: {
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.1,
      elevation: 3,
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
    },
  });
