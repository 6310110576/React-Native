import React, {useEffect, useState} from 'react';
import { Text, ImageBackground, StyleSheet, View} from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({         
        main: '-',
        description: '-',
        temp: 0
    }) 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=4946dfb2cf98aa5063066a37f4dbc68b`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

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