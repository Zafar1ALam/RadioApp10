import React, { useState } from 'react';
import {
    Text, View, ScrollView, Image, StyleSheet,
    FlatList, TouchableOpacity, Modal
} from 'react-native'
import Button1 from './Components/Button1';
import STYLES from './STYLES';
import VideoPlayer from "react-native-video-player";

const Vedio = props => {
    const [modalVisible, setModalVisible] = useState(false);
    const [stateVideoUri, setStateVedioUri] = useState('');
    const [stateVideoThumbnail, setStateVedioThumbnail] = useState('');
    const [stateFlatList, setStateFlatList] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnail: 'https://baconmockup.com/300/200/'
        },
    ])

    const modalOpen = (item) => {
        console.log(item.uri)
        setModalVisible(true);
        setStateVedioUri(item.uri)
        setStateVedioThumbnail(item.thumbnail)

    }
    return (
        <View style={STYLES.container}>
            <View style={style.header}>
                <Text
                    style={[STYLES.fontSize_21color_05232D,
                    { alignSelf: 'flex-start' }]}>Video</Text>


            </View>
            <View style={style.content}>

                <FlatList
                    data={stateFlatList}
                    renderItem={({ item }) => {
                        console.log(item.thumbnail)
                        return (
                            <TouchableOpacity style={{
                                backgroundColor: '#FFFFFF',
                                // backgroundColor: 'red',
                                height: 250,
                                marginBottom: '4%',
                                borderRadius: 20,


                            }} onPress={() => { modalOpen(item) }}
                            >

                                <Image
                                    source={{ uri: item.thumbnail }} style={{
                                        flex: 1,
                                    }} />
                                <Image style={{
                                    position: 'absolute'
                                    , top: '40%', left: '40%', height: 50,
                                    width: 50
                                }}
                                    source={require('./Assets/RadioTabBarPlayButton.png')} />




                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id}


                />
            </View>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    //    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >

                <VideoPlayer
                    video={{ uri: stateVideoUri }}
                    videoHeight={850}
                    // videoWidth={500}
                    // videoHeight={800}
                    thumbnail={{ uri: stateVideoThumbnail }}
                    showDuration
                // pauseOnPress

                />


            </Modal>

        </View>
    );
};



export default Vedio;



const style = StyleSheet.create({
    header: {
        // backgroundColor: 'red',
        flex: 0.07,
        paddingHorizontal: '5%',
        paddingTop: '2%',

        alignItems: 'center',
    },
    content: {
        flex: 0.93,
        // backgroundColor: 'blue',

        paddingHorizontal: '5%'

    },


})