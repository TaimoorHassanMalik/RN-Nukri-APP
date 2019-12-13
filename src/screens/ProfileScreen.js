//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, LayoutAnimation, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import * as firebase from "firebase";

// create a component
class ProfileScreen extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        email: "",
        displayName: ""
    }
    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;
        this.setState({ email, displayName })
    }
    signOutUser() {
        firebase.auth().signOut();
    }
    render() {
        LayoutAnimation.easeInEaseOut()
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo />
                </View>

                <View style={styles.details}>
                    <Text>Your Name : {this.state.displayName}</Text>
                    <Text>Your Email: {this.state.email}</Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.signOutUser}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: -10,
    },
    details: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 117
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    buttonContainer: {
        backgroundColor: '#3B3B98',
        padding: 6,
        borderRadius: 10,
        marginTop: 20
    }
});

//make this component available to the app
export default ProfileScreen;
