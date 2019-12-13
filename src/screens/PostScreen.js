//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PostScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="md-arrow-back" size={32} style={{ color: '#E9446A' }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Post</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={require('../assets/tempAvatar.jpg')} style={styles.avatar}></Image>
                    <TextInput
                        // autoFocus={true}
                        multiline={true}
                        numberOfLines={4}
                        style={{ flex: 1 }}
                        placeholder="Want to share something"
                    ></TextInput>
                </View>

                <TouchableOpacity style={styles.photo} >
                    <Icon name="md-camera" size={25} style={{ color: '#E9446A',marginTop:-25,marginRight:-10 }} />
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#D8D9DB",
    },
    inputContainer: {
        margin: 10,
        marginTop:-15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 24,
        marginRight: 16,
    },
    photo:{
        alignItems:'flex-end',
        marginHorizontal: 22,
    }
});

export default PostScreen;
