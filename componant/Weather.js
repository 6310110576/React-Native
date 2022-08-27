import React, {useState} from 'react';
import { Text, ImageBackground, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({         
        main: '',
        description: '',
        temp: 0
    }) 

    return (
            <ImageBackground source={require('../saos.jpg')} style={styles.backdrop}>
                <View style={styles.highlight}>
                        <Text style={styles.text}>Zip code is {props.zipCode}.</Text>
                        <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    text: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center'
    },

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width:"100%", 
        height:"45%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    }

});