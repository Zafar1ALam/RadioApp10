import React from 'react';
import { Text, TextInput, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

const Button1 = props => {
    return (
        <TouchableOpacity style={style.touchableopacity} onPress={props.onPress}>
            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default Button1;


const style = StyleSheet.create({
    touchableopacity: {
        backgroundColor: '#05232D',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '5%',
        marginBottom: '10%'

    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,

    }


});