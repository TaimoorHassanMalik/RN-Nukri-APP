import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';

import * as firebase from "firebase";
class HomeScreen extends Component {


    render() {

        return (
            <View style={styles.container}>
                <Text>Taimoor Hassan</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default HomeScreen;
