import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class StarMapScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style = {{textAlign :'center',fontSize :26,fontFamily : 'Algerian'}}>
                    Star Map
                </Text>
            </View>
        )
    }
}