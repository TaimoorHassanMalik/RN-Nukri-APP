//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../components/Logo';
import * as firebase from 'firebase';


class RegisterScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    }
    handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
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
                        style={styles.input}
                        placeholder="Full Name"
                        autoCapitalize='none'
                        // autoCorrect={false}
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name}
                    />
                    <TextInput
                        placeholder="Email"
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.handleSignUp} >
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 15 }}>
                            already have account ? <Text style={{ color: '#FF8C00' }}>Sign In</Text>
                        </Text>
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
});


export default RegisterScreen;
