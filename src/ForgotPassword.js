import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Button1 from './Components/Button1';

import TextInput1 from './Components/TextInput1';
import STYLES from './STYLES';

const ForgotPassword = ({ navigation }) => {
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
                    <View style={{ flex: 0.5, }}>
                        <Text style={STYLES.fontSize_21color_1C1A1A}>
                            Forgot Password?</Text>
                    </View>

                    <View style={{
                        width: '100%',
                        flex: 0.5, justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>
                        <Text style={[STYLES.fontSize_13color_1C1A1A, {
                            marginBottom: '3%'
                        }]}>Enter Email for Verification Code</Text>

                        <TextInput1 source={require('./Assets/emaillogo.png')}
                            placeholder="Email" />

                    </View>

                </View>



                <View style={style.footer}>
                    <Button1 text="SEND CODE" onPress={() => navigation.navigate('ResetPassword')} />

                </View>
            </View>
        </ScrollView>
    );
};



export default ForgotPassword;

const style = StyleSheet.create({
    header: {
        //backgroundColor: 'red',
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.25,
        alignItems: 'center',
        marginVertical: '5%',
        // justifyContent: 'spac',
        paddingHorizontal: '10%'

    },

    footer: {
        flex: 0.45,
        // backgroundColor: 'yellow',
        marginHorizontal: '10%',
        justifyContent: 'flex-end',


    }


});