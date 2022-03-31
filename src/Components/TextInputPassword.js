import React, { useState } from 'react';
import {
    Text, TextInput, StyleSheet,
    View, Image, TouchableOpacity
} from 'react-native'
import STYLES from '../STYLES';
import Feather from 'react-native-vector-icons/Feather'
const TextInputPassword = props => {
    const [stateEye, setStateEye] = useState(false)

    return (
        <View style={style.textInput}>
            <Image source={props.source} style={{ marginLeft: '1%' }} />

            <TextInput placeholder={props.placeholder}
                style={[{ flex: 1, marginLeft: '3%', },
                STYLES.fontSize_15color_707070]}
                secureTextEntry={!stateEye}
            />
            {stateEye == false ?
                <TouchableOpacity onPress={() => { setStateEye(true) }}>
                    <Feather name="eye-off" size={20}
                        style={{ marginRight: '3%' }} />
                </TouchableOpacity>
                : <TouchableOpacity onPress={() => { setStateEye(false) }}
                >
                    <Feather name="eye" size={20}
                        style={{ marginRight: '3%' }} />
                </TouchableOpacity>

            }
        </View>
    );
};



export default TextInputPassword;

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