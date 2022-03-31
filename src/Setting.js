import React from 'react';
import {
    Text, View, ScrollView, Image, StyleSheet,
    Linking, TouchableOpacity
} from 'react-native'
import Button1 from './Components/Button1';
import TextInput1 from './Components/TextInput1';
import STYLES from './STYLES';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Setting = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={style.header}>
                    <Text
                        style={[STYLES.fontSize_21color_05232D,
                        { alignSelf: 'flex-start' }]}>Setting</Text>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginLeft: '5%'
                    }} onPress={() => navigation.navigate("EditProfile")}>
                        <Text style={STYLES.fontSize_21color_070707}>Edit Profile</Text>

                        <AntDesign name='caretright' size={20} color={'#070707'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: '5%'
                    }}
                        onPress={() => Linking.openURL('https://www.ukpressureradio.com/')}>
                        <Text style={STYLES.fontSize_21color_070707}>About Us</Text>
                        <AntDesign name='caretright' size={20} color={'#070707'} />
                    </TouchableOpacity>
                </View>

                <View style={style.footer}>
                    <Button1 text="Logout"
                        onPress={() => navigation.navigate("Login")} />
                </View>


            </View>
        </ScrollView>

    );
};



export default Setting;




const style = StyleSheet.create({
    header: {
        //backgroundColor: 'red',
        flex: 0.25,
        paddingHorizontal: '8%',
        paddingTop: '2%',
        justifyContent: 'space-around'
        // alignItems: 'center',
    },

    footer: {
        flex: 0.75,
        // alignItems: 'center',
        //backgroundColor: 'orange',
        //alignItems: 'center',
        // marginVertical: '5%',
        justifyContent: 'flex-end',
        paddingHorizontal: '10%'

    },


})