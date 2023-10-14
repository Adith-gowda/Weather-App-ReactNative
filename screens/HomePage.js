import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


export default function HomePage (){

    const navigation = useNavigation();

    return (
        <View style={styles.pagemain}>
            <Image 
            blurRadius={70} 
            source={require('../assets/images/homepagelogo.jpg')} 
            className="absolute w-full h-full" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.ctaText} onPress={() => navigation.navigate('SETTINGS')}>Settings</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/homepagelogo.jpg')}
                    style={styles.logo}
                />
                <Text style={styles.appName}>Your Weather App</Text>
                <Text style={styles.description}>Your Personal Weather Assistant</Text>
                <TouchableOpacity style={styles.ctaButton}>
                    <Text style={styles.ctaText} onPress={() => navigation.navigate('forecast')}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar:{
        flex: 1,
        backgroundColor: '#4698eb',
        justifyContent: 'right',
    },
    button:{ 
        backgroundColor: '#7b8485', // Button color
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 300,
        width: 90,
    },
    pagemain:{
        flex: 1,
        backgroundColor: '#90e0f0', // Replace with your desired background color
    },
    container: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#333', // Text color
    },
    
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
    },
    ctaButton: {
        backgroundColor: '#007AFF', // Button color
        borderRadius: 5,
        padding: 10,
    },
    ctaText: {
        color: 'white', // Button text color
        fontSize: 18,
    },
});
