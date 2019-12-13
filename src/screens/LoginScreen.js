//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, LayoutAnimation, Image } from 'react-native';
import Logo from '../components/Logo';

import * as firebase from 'firebase';

class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    };

    state = {
        email: 'guriya@gmail.com',
        password: '123123',
        errorMessage: null,
        loginLoading: false,
        loginMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>

                <View style={styles.logoContainer}>
                    <Logo />
                </View>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.emailAndPassword}>
                    <TextInput
                        placeholder="Email Here..."
                        autoCorrect={false}
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />

                    <TouchableOpacity onPress={this.forgotPassword} style={styles.forget}>
                        <Text style={{ color: '#FF8C00', fontWeight: 'bold' }}>Forgot Password ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogin} >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    

                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 15 }}>
                            New to SocialApp ? <Text style={{ color: '#FF8C00' }}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                    

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailAndPassword: {
        flex: 2
    },
    input: {
        height: 40,
        backgroundColor: 'rgb(255,255,245)',
        paddingLeft: 10,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1.0,
        fontSize: 15,
        borderColor: '#FF8C00',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonContainer: {
        backgroundColor: '#3B3B98',
        padding: 6,
        borderRadius: 10
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 'bold',
        fontSize: 13,
        textAlign: 'center'
    },
    forget: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    }
});


export default LoginScreen;
