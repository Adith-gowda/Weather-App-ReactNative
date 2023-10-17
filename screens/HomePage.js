import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';


export default function HomePage (){

    const navigation = useNavigation();
    return (
        <View style={styles.pagemain}>
            <Image 
            blurRadius={70} 
            source={require('../assets/images/homepagelogo.jpg')} 
            className="absolute w-full h-full" />
            <TouchableOpacity
                onPress={() => navigation.navigate("Settings")}
                style={styles.settingsButton}
            >
                <Entypo name="edit" size={24} color={colors.lightGray} />
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
                <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    style={styles.chatButton}
                >
                    <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        padding: 80,
        backgroundColor: "#555",
    },
    appButton: {
        padding: 12,
    },
    appButtonText: {
        fontSize: 17,
    },
    appButtonContainer: {
        
        width: 65,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
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
    chatButton: {
        position: 'absolute',
        bottom: 50,  // Adjust this value as needed to control the distance from the bottom
        right: 20,  // Adjust this value as needed to control the distance from the right
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
    },
    settingsButton: {
        position: 'relative',
        color: 'white',
        backgroundColor: colors.primary,
        top: 20,  // Adjust this value as needed to control the distance from the bottom
        left: 20,  // Adjust this value as needed to control the distance from the right
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
    },
});
