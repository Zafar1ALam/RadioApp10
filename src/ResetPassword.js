import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Button1 from './Components/Button1';

import TextInput1 from './Components/TextInput1';
import TextInputPassword from './Components/TextInputPassword';
import STYLES from './STYLES';

const ResetPassword = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={style.header}>
                    <Image
                        source={require('./Assets/UK_PRESSURE_RADIO_LOGO.png')}
                        style={{
                            resizeMode: 'contain', flex: 1 //backgroundColor: 'blue'
                            , width: '100%'
                        }} />
                </View>
                <View style={style.content}>
                    <View >
                        <Text style={STYLES.fontSize_21color_1C1A1A}>
                            Reset Password</Text>
                    </View>

                    <View style={{

                        flex: 0.9, justifyContent: 'space-evenly',
                        alignItems: 'center',
                        //backgroundColor: 'pink'
                    }}>


                        <TextInputPassword source={require('./Assets/lock.png')}
                            placeholder="New Password" />
                        <TextInputPassword source={require('./Assets/lock.png')}
                            placeholder="Confirm New Password" />

                    </View>

                </View>



                <View style={style.footer}>
                    <Button1 text="CONTINUE"
                        onPress={() => navigation.navigate('Login')}
                    />

                </View>
            </View>
        </ScrollView>
    );
};



export default ResetPassword;



const style = StyleSheet.create({
    header: {
        //  backgroundColor: 'red',
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.30,
        alignItems: 'center',
        //backgroundColor: 'red',
        marginVertical: '5%',
        justifyContent: 'space-between',
        paddingHorizontal: '10%'

    },

    footer: {
        flex: 0.45,
        //backgroundColor: 'yellow',
        marginHorizontal: '10%',
        justifyContent: 'flex-end',
        //paddingBottom: '5%'


    }


});