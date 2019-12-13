import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';
// import WelcomePage from './src/screens/WelcomePage';

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAA1y5mcSETS-FZHjj769zsEvmjrx6K2OQ",
    authDomain: "myjobsapp-c2013.firebaseapp.com",
    databaseURL: "https://myjobsapp-c2013.firebaseio.com",
    projectId: "myjobsapp-c2013",
    storageBucket: "myjobsapp-c2013.appspot.com",
    messagingSenderId: "486790113193",
    appId: "1:486790113193:web:ff4d4d9791ff96edf146b8",
    measurementId: "G-22Q557S9DJ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const AppContainer = createStackNavigator(
    {
        default: createBottomTabNavigator(
            {
                Home: {
                    screen: HomeScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={32} color={tintColor} />
                    }
                },
                Message: {
                    screen: MessageScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Icon name="ios-chatboxes" size={32} color={tintColor} />
                    }
                },
                Notification: {
                    screen: NotificationScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" size={32} color={tintColor} />
                    }
                },
                Profile: {
                    screen: ProfileScreen,
                    navigationOptions: {
                        tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={32} color={tintColor} />
                    }
                }
            },
            {
                tabBarOptions: {
                    activeTintColor: '#FF8C00',
                    inactiveTintColor: '#B8BBC4',
                    // showLabel: false,  
                }
            }
        )
    },
    {
        mode: "model",
        headerMode: "none",
        // initialRouteName:"HomeScreen"
    }
)


const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
})
export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            // Welcome: WelcomePage,
            App: AppContainer,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);