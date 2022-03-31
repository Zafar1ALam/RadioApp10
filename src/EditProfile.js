import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Button1 from './Components/Button1';
import TextInput1 from './Components/TextInput1';
import TextInputPassword from './Components/TextInputPassword';
import STYLES from './STYLES';


const EditProfile = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={style.header}>
                    <Text
                        style={[STYLES.fontSize_21color_05232D,
                        { alignSelf: 'flex-start' }]}>Edit Profile</Text>


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
                    <Button1 text="Update profile"
                        onPress={() => navigation.navigate("Login")} />
                </View>


            </View>
        </ScrollView>

    );
};



export default EditProfile;




const style = StyleSheet.create({
    header: {
        //  backgroundColor: 'red',
        flex: 0.07,
        paddingHorizontal: '5%',
        paddingTop: '2%',

        // alignItems: 'center',
    },
    content: {
        flex: 0.36,
        // alignItems: 'center',
        //backgroundColor: 'blue',
        //  alignItems: 'center',
        // marginVertical: '5%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '10%'

    },
    footer: {
        flex: 0.57,
        // alignItems: 'center',
        //  backgroundColor: 'orange',
        //alignItems: 'center',
        // marginVertical: '5%',
        justifyContent: 'flex-end',
        paddingHorizontal: '10%'

    },


})