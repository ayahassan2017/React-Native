import React from "react";
import { SafeAreaView , Text, View, StyleSheet } from "react-native";
import Box from './components/Box';

export default function App () {

  return (
<SafeAreaView>
<View style={styles.containerStyle}>
<Text style={styles.text}>
  Here are some boxes with color names
</Text>

<Box title ="lightpink : #ffb6c1" bgColor = "#ffb6c1" />
<Box title ="yellowgreen : #9acd32" bgColor = "#9acd32" />
<Box title ="lightskyblue : #87cefa" bgColor = "#87cefa" />
<Box title ="darkgoldenrod : #b8860b" bgColor = "#b8860b" />
</View>
</SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyle:{
  marginTop:35,
  paddingHoizontal:20
  },
  text:{
    fontWeight: 'bold',
    fontSize:18,
    marginBottom:20,
  }
})