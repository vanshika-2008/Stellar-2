import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,}}>
               <SafeAreaView style = {styles.droidSafeArea} />
                <ImageBackground source = {require('../assets/stars.gif')}
                style = {styles.backgroundImage}
                >
                <View>
                <Text style = {styles.titleText}>
                    Stellar Application
                </Text>
                </View>
                <TouchableOpacity style = {styles.routeCard} 
                onPress = {()=>{
                    this.props.navigation.navigate('SpaceCrafts')
                }}>
                    <Text style = {styles.routeText}>Space Crafts</Text>
                    <Text style = {styles.KnowMore}>{'Know More->'}</Text>
                    <Image source = {require('../assets/space_crafts.png')}
                    style = {styles.iconImage}
                    >

                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.routeCard} 
                onPress = {()=>{
                    this.props.navigation.navigate('StarMap')
                }}>
                    <Text style = {styles.routeText}>StarMap</Text>
                    <Text style = {styles.KnowMore}>{'Know More->'}</Text>
                    <Image source = {require('../assets/star_map.png')}
                    style = {styles.iconImage}
                    >

                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.routeCard}
                onPress = {()=>{
                    this.props.navigation.navigate('DailyPictures')
                }}>
                    <Text style = {styles.routeText}>Daily Pictures</Text>
                    <Text style = {styles.KnowMore}>{'Know More->'}</Text>
                    <Image source = {require('../assets/daily_pictures.png')}
                    style = {styles.iconImage}
                    >

                    </Image>
                </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    droidSafeArea : {
        marginTop:Platform.OS==="android" ? StatusBar.currentHeight : 0
    },
    backgroundImage : {
        flex: 1,
        resizeMode : 'cover',
    },
    titleText : {
        fontSize : 42,
        color : '#A5A3C1',
        fontWeight : 'bold',
        fontFamily : 'Flux Architect' 
    },
    routeCard : {
        flex :0.25,
        marginLeft : 50,
        marginRight : 50,
        marginTop : 50,
        borderRadius : 30,
        backgroundColor : "white"
    },
    routeText : {
        fontSize : 32,
        fontWeight : 'bold',
        fontFamily : 'Comic Sans MS',
        color : '#000000',
        marginTop : 40,
        paddingLeft : 28
    },
    iconImage : {
        position : 'absolute',
        height:200,
        width:200,
        resizeMode:"contain",
        right:20,
        top:-80,
    },
    KnowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    }
})