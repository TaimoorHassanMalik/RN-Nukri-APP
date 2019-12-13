/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project
import { StyleSheet, View, Text, Image } from 'react-native';
//import all the required component
import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it
import Icon from 'react-native-ionicons'

export default class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
            //To show the main page of the app
        };
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-arrow-round-forward"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                    style={{ backgroundColor: 'transparent' }}
                />
            </View>
        );
    };
    _onDone = () => {
        this.setState({ showRealApp: true }, () => this.props.navigation.navigate('Login'));
    };
    _onSkip = () => {
        this.setState({ showRealApp: true }, () => this.props.navigation.navigate('Login'));
    };
    _renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: item.backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    paddingBottom: 100
                }}>
                <Text style={styles.title}>{item.title}</Text>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };
    render() {
        //If false show the Intro Slides
        if (this.state.showRealApp) {
            //Real Application
            return (
                <View>

                </View>
            );
        } else {
            //Intro slides
            return (
                <AppIntroSlider
                    slides={slides}
                    renderItem={this._renderItem}
                    onDone={this._onDone}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                />
            );
        }
    }
}
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 30,
    },
    title: {
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const slides = [
    {
        key: 's1',
        text: 'Best Recharge offers',
        title: 'Mobile Recharge',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
        },
        backgroundColor: '#20d2bb',
    },
    {
        key: 's2',
        title: 'Flight Booking',
        text: 'Upto 25% off on Domestic Flights',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Great Offers',
        text: 'Enjoy Great offers on our all services',
        image: {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
        },
        backgroundColor: '#22bcb5',
    },
    {
        key: 's4',
        title: 'Best Deals',
        text: ' Best Deals on all our services',
        image: {
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
        },
        backgroundColor: '#3395ff',
    },
    {
        key: 's5',
        title: 'Bus Booking',
        text: 'Enjoy Travelling on Bus with flat 100% off',
        image: {
            uri: 
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
        },
        backgroundColor: '#f6437b',
    },
    {
        key: 's6',
        title: 'Train Booking',
        text: ' 10% off on first Train booking',
        image: {
            uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
        },
        backgroundColor: '#febe29',
    },
];