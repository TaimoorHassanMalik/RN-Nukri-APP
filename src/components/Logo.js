import React, { Component } from 'react';
import { View, Image } from 'react-native';

const Logo = () => {
    return (
        <View>
            <Image source={require('../../assets/logo.png')} style={{ height: 150, width: 150 }} />
        </View>
    );
};

export default Logo;
