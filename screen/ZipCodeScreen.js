import React from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { StatusBar, View, Text, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chumphon', code: '86000' },
    { place: 'Phangnga', code: '82000' },
    { place: 'Lopburi', code: '15000' },
    { place: 'Trat', code: '23000' },
    { place: 'Nan', code: '55000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight underlayColor="#ADD8E6" onPress={() => {
        navigation.navigate("Weather", {zipCode: code})
    }}>
        <View style= {style.zipItem}>
            <Text style= {style.zipPlace}>{place}</Text>
            <Text style= {style.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>

)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        
        <View style={style.background}>
            <FlatList
            data = {availableZipItems}
            key = {_keyExtractor}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
          />
        <StatusBar styte="auto" />
        </View>  
    )
}

const style = StyleSheet.create(
    {
      zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
      },
      zipPlace: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '800'

      },
      zipCode: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center',
      },
      background: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }
    }
  )