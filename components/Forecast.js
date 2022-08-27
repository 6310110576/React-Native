import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View>
            <View style= {{flexDirection: "row", justifyContent: 'center'}}>
                <Text style={styles.value}>{props.temp}</Text>
                <Text style={styles.unit}>°C</Text>
            </View>
            <View>
                <Text style={styles.unit}>--------------------</Text>
                <Text style={styles.description}>{props.description}</Text>


                
                    <View style= {{flexDirection: "row", justifyContent: 'center',}}>
                        <Text style={styles.text}>humidity : </Text>
                        <Text style={styles.number}>{props.humidity}%</Text>
                    </View>
                    <View style= {{flexDirection: "row", justifyContent: 'center', }}>
                        <Text style={styles.text}>feels_like : </Text>
                        <Text style={styles.number}>{props.feels_like}°C</Text>
                    </View>
                
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        marginTop: Constants.statusBarHeight,
        fontSize: 50,
        textAlign: 'center',
        color: 'white',
    },

    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        fontWeight: '600'
    },

    value: {
        fontSize: 80, 
        fontWeight: "600", 
        color: 'white', 
        textAlign: 'center',
        margin: 10,

    },

    unit: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        lineHeight: 80,
    },
    number: {
        fontSize: 20,
        
        color: 'white',
        textAlign: 'center',
        lineHeight: 33,
    },
    description: {
        fontSize: 40,
        marginBottom: 30,
        color: 'white',
        textAlign: 'center',

    }

});