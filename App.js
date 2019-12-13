// import React from 'react'
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import LoadingScreen from './src/screens/LoadingScreen';
// import LoginScreen from './src/screens/LoginScreen';
// import RegisterScreen from './src/screens/RegisterScreen';
// import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
// import MessageScreen from './src/screens/MessageScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// // import WelcomePage from './src/screens/WelcomePage';

// import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyAA1y5mcSETS-FZHjj769zsEvmjrx6K2OQ",
//     authDomain: "myjobsapp-c2013.firebaseapp.com",
//     databaseURL: "https://myjobsapp-c2013.firebaseio.com",
//     projectId: "myjobsapp-c2013",
//     storageBucket: "myjobsapp-c2013.appspot.com",
//     messagingSenderId: "486790113193",
//     appId: "1:486790113193:web:ff4d4d9791ff96edf146b8",
//     measurementId: "G-22Q557S9DJ"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const AppContainer = createStackNavigator(
//   {
//     default: createBottomTabNavigator(
//       {
//         Home: {
//           screen: HomeScreen,
//           navigationOptions: {
//             tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={32} color={tintColor} />
//           }
//         },
//         Message: {
//           screen: MessageScreen,
//           navigationOptions: {
//             tabBarIcon: ({ tintColor }) => <Icon name="ios-chatboxes" size={32} color={tintColor} />
//           }
//         },
//         Notification: {
//           screen: NotificationScreen,
//           navigationOptions: {
//             tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" size={32} color={tintColor} />
//           }
//         },
//         Profile: {
//           screen: ProfileScreen,
//           navigationOptions: {
//             tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={32} color={tintColor} />
//           }
//         }
//       },
//       {
//         tabBarOptions: {
//           activeTintColor: '#FF8C00',
//           inactiveTintColor: '#B8BBC4',
//           // showLabel: false,  
//         }
//       }
//     )
//   },
//   {
//     mode: "model",
//     headerMode: "none",
//     // initialRouteName:"HomeScreen"
//   }
// )


// const AuthStack = createStackNavigator({
//   Login: LoginScreen,
//   Register: RegisterScreen,
// })
// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       Loading: LoadingScreen,
//       // Welcome: WelcomePage,
//       App: AppContainer,
//       Auth: AuthStack
//     },
//     {
//       initialRouteName: "Loading"
//     }
//   )
// );



//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navigation from './src/Navigation/Navigation';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import AuthReducers from './src/Redux/Reducers/AuthReducers';
import JobReducer from './src/Redux/Reducers/jobReducer';

const rootReducers = combineReducers({
  auth: AuthReducers,
  job:JobReducer
})

const store = createStore(rootReducers, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}