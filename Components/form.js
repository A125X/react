import React, { useState } from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import { Button } from "react-native-web";

export default function form({addHandler, deleteAllHandler}) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
    setValue(text);
    };


    return (
        <View style={styles.input}>
            <TextInput onChangeText={onChange} placeholder="enter the task..."   placeholderTextColor="#858585"
            style={{borderWidth: 1, borderColor: '#858585', padding: 10, marginBottom: 20}} />
            <Button 
                color="#858585"
                onPress={()=> addHandler(text)} 
                title='add task'>
            </Button>
            <Button 
                color="#494949" 
                onPress={() => deleteAllHandler()} title="delete all the tasks"> 
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        width: "40%",
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});