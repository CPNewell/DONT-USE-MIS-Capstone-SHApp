// https://reactnavigation.org/docs/en/getting-started.html#installation
// React Native 0.60 and higher

// On newer versions of React Native, linking is automatic.

// To complete the linking on iOS, make sure you have Cocoapods installed. Then run:

// cd ios
// pod install
// cd ..
// To finalize installation of react-native-screens for Android, add the following two lines to dependencies section in android/app/build.gradle:

// implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
// implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

import React, { Component } from "react";
import { createDrawerNavigator, DrawerItems, DrawerNavigatorItems, DrawerActions } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/FontAwesome';
import About from '../screens/survey/index'
import Home, { HomeScreen } from '../screens/home/index'
import Settings from '../screens/profile/index'
import LoginScreen from '../screens/login/index'
import SampleScreen from '../screens/sample/index'
import { View, ScrollView, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import AppNavigator from './TabNavigator'
import DrawerNavigatorComponent from './DrawerNavigatorComponent'

const MainNavigator = createDrawerNavigator(
    {
        AppNavigator: {
            screen: AppNavigator
        },
        Login: {screen: LoginScreen},
        Sample: {screen: SampleScreen},
        Home: {screen: HomeScreen},
    },
    {
        initialRouteName: 'AppNavigator',
        // contentComponent: DrawerScreen,
        contentComponent: DrawerNavigatorComponent,
        drawerPosition: "right",
        drawerWidth: Dimensions.get('window').width / 2.2,
        
    }
);

export default MainNavigator