import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import * as firebase from "firebase";
import { useDispatch } from 'react-redux';
import * as AuthActions from '../Redux/Actions/AuthActions'


// create a component
const LoadingScreen = (props) => {

    const dispatch = useDispatch()

    const tryLogin = async () => {
        try {
            await firebase.auth().onAuthStateChanged(user => {
                // console.log('user information..', user)
                if (user != null) {
                    // console.log('user is logged in')

                    dispatch(AuthActions.loggedIn(user.uid, user.getIdToken, user.displayName))

                    props.navigation.navigate('App')
                } else {
                    // console.log('user is not logged in, try to login in')
                    props.navigation.navigate('Auth')
                }
            })
        } catch{
            console.log('error')
        }
    }

    useEffect(() => {
        tryLogin()
    }, [])

    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

//make this component available to the app
export default LoadingScreen;
