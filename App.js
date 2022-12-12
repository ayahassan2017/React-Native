// import { View , Text  } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./src/navigation/root";

const App = () =>{
  return (
    <NavigationContainer>
        <Root/>
    </NavigationContainer>
  )
}