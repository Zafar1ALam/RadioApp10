
import React from 'react';
import { Image } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Radio from '../Radio';

import Vedio from '../Vedio';
import Setting from '../Setting';
import STYLES from '../STYLES';
const Tab = createBottomTabNavigator();
const TabNavigations = props => {
    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Radio" component={Radio}
                options={{
                    tabBarActiveTintColor: '#000000',
                    tabBarInactiveTintColor: '#777777',
                    tabBarLabel: 'RADIO',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={require('../Assets/RadioTabBarLogo.png')}
                            style={{ tintColor: focused ? "#000000" : "#777777" }} />
                    ),
                }}

            />

            <Tab.Screen name="Vedio" component={Vedio}
                options={{
                    tabBarActiveTintColor: '#000000',
                    tabBarInactiveTintColor: '#777777',
                    tabBarLabel: 'VEDIO',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={require('../Assets/VedioTabBarLogo.png')}
                            style={{ tintColor: focused ? "#000000" : "#777777" }} />
                    ),
                }} />
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarActiveTintColor: '#000000',
                    tabBarInactiveTintColor: '#777777',
                    tabBarLabel: 'SETTING',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image source={require('../Assets/settinglogo.png')}

                            style={{ tintColor: focused ? "#000000" : "#777777" }} />
                    ),
                }} />
        </Tab.Navigator>
    );
};



export default TabNavigations;