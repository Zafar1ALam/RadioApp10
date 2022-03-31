import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Button1 from './Components/Button1';

import TextInput1 from './Components/TextInput1';
import TextInputPassword from './Components/TextInputPassword';
import STYLES from './STYLES';

const SignUp = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={style.header}>
                    <Image
                        source={require('./Assets/UK_PRESSURE_RADIO_LOGO.png')}
                        style={{
                            resizeMode: 'contain', flex: 1,
                            width: '100%'
                        }} />
                </View>
                <View style={style.content}>
                    <TextInput1 source={require('./Assets/emaillogo.png')}
                        placeholder="Username" />
                    <TextInput1 source={require('./Assets/emaillogo.png')}
                        placeholder="Email" />
                    <TextInputPassword source={require('./Assets/lock.png')}
                        placeholder="Password"
                        secureTextEntry={true} />

                </View>

                <View style={style.footer}>
                    <Button1 text="SIGNUP" onPress={() => navigation.navigate('TabNavigations')} />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[STYLES.fontSize_15color_1C1A1A
                            , { alignSelf: 'center', marginBottom: '5%' }]}>
                            Don't have an account? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};



export default SignUp;

const style = StyleSheet.create({
    header: {
        //backgroundColor: 'red',
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.30,
        // backgroundColor: 'green',
        justifyContent: 'space-evenly',
        marginHorizontal: '10%',

    },

    footer: {
        flex: 0.45,
        // backgroundColor: 'yellow',
        marginHorizontal: '10%',
        justifyContent: 'flex-end',


    }


});