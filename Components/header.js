import React from "react";
import { StyleSheet, View, Text } from "react-native-web";

export default function Header(){
    return(
        <View style={styles.main}>
            <Text style={styles.text}> todo list </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    text:{
        color: "#494949", 
        fontSize: 15,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 50,
    },
});