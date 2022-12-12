import React from "react";
import { Text ,View ,StyleSheet} from "react-native";
import styles from './styles';


export default function Box ({ bgColor , title}) {
    return (
        <View style={StyleSheet.flatten([
            styles.containerStyle , 
            {
            backgroundColor:bgColor
        },
    ])}>
            <Text style={styles.titleStyle}>{title}</Text>
       </View>
    )
}