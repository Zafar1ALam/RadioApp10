import React, { useEffect, useState } from 'react';
import {
    Text, View, ScrollView, Image, StyleSheet, TouchableOpacity,
    ActivityIndicator,
    FlatList
} from 'react-native'
import Button1 from './Components/Button1';
import STYLES from './STYLES';
import VideoPlayer from "react-native-video";

const Radio = props => {
    const [stateAudio, setStateAudio] = useState(true)
    const [stateIndicator, setStateIndicator] = useState(false)

    const audio = () => {
        setStateIndicator(false)
        setStateAudio(!stateAudio)






    }
    useEffect(() => {
        setStateIndicator(!stateIndicator)
        setTimeout(() => {
            setStateIndicator(false)
        }, 8000)

    }, [])


    return (
        <View style={STYLES.container}>

            <VideoPlayer
                source={{ uri: "https://uk1.streamingpulse.com/ssl/7036" }}
                muted={stateAudio} />

            <View style={style.header}>
                <Text
                    style={[STYLES.fontSize_21color_05232D,
                    { alignSelf: 'flex-start' }]}>Radio</Text>

                <View style={{
                    flex: 0.8,
                    marginTop: '5%',
                }}>
                    <Image
                        source={require('../src/Assets/RadioTabBarHeaderBackground.png')}
                        style={{
                            flex: 1, resizeMode: 'contain',
                        }} />
                </View>
            </View>
            <View style={style.content}>
                <View style={{
                    flex: 0.4, justifyContent: "space-evenly",
                    alignItems: 'center'
                }}>
                    <Text style={STYLES.fontSize_30color_777777}>After the Mirage</Text>
                    <Text style={STYLES.fontSize_16color_777777HelveticaNeue}>Mystery of the Spanish Headmster</Text>

                    <View style={{
                        flexDirection: 'row',
                        marginTop: '2%', justifyContent: 'center'
                    }}>
                        <Image source={require('../src/Assets/lock.png')} />
                        <Text style={[{ marginLeft: '3%', }, STYLES.fontSize_16color_777777GraphikRegular]}>Jane Doe</Text>

                    </View>
                </View>
                <View style={{ flex: 0.6, justifyContent: 'center', }}>
                    <TouchableOpacity style={{ flex: 0.5, }}
                        onPress={() => { audio() }}>

                        <Image
                            style={{ resizeMode: 'contain', flex: 1 }}
                            source={require('../src/Assets/RadioTabBarPlayButton.png')} />

                    </TouchableOpacity>
                    <ActivityIndicator
                        style={{ position: 'absolute', left: '10%' }}
                        animating={stateIndicator} size="large" />
                </View>


            </View>


        </View>

    );
};



export default Radio;




const style = StyleSheet.create({
    header: {
        // backgroundColor: 'red',
        flex: 0.45,
        paddingHorizontal: '5%',
        paddingTop: '2%',

        alignItems: 'center',
    },
    content: {
        flex: 0.45,
        // alignItems: 'center',
        // backgroundColor: 'blue',
        alignItems: 'center',
        // marginVertical: '5%',
        justifyContent: 'space-between',
        // paddingHorizontal: '10%'

    },

    footer: {
        flex: 0.45,
        backgroundColor: 'yellow',
        alignItems: 'center',

        // marginHorizontal: '10%',
        // justifyContent: 'flex-end',
        //paddingBottom: '5%'


    }
})