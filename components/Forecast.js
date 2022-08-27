import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View>
            <View>
                <Text style={styles.head}>main</Text>
                <Text style={styles.text}>{props.main}</Text>
                <Text style={styles.text}>description</Text>
                <Text style={styles.text}>{props.description}</Text>
            </View>

           
            <View style= {{flexDirection: "row", justifyContent: 'center'}}>
                <Text style={styles.value}>{props.temp}</Text>
                <Text style={styles.unit}>°C</Text>
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
    },

    value: {
        fontSize: 40, 
        fontWeight: "bold", 
        color: 'white', 
        textAlign: 'center',

    },

    unit: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        lineHeight: 60,
    }

});