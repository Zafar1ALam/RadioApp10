import React from 'react';
import { Text, TextInput, StyleSheet, View, Image } from 'react-native'
import STYLES from '../STYLES';

const TextInput1 = props => {

    return (
        <View style={style.textInput}>
            <Image source={props.source} style={{ marginLeft: '1%' }} />

            <TextInput placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '3%', },
                STYLES.fontSize_15color_707070]}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    );
};



export default TextInput1;

const style = StyleSheet.create({
    textInput: {
        height: 50,
        //backgroundColor: 'red',
        borderWidth: 1,

        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '2%'
    },


});