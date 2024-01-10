import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    text: {
        fontSize: 15,
        padding: 10,
        textAlign: "center",
        color: "white", 
        backgroundColor: "#858585",
        marginBottom: 10,
        margin: '0',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});