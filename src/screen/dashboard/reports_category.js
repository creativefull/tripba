import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Button, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RkStyleSheet, RkModalImg, RkButton, RkTabView, RkTheme} from 'react-native-ui-kitten';


export default class ReportsCategory extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
        this.state = {
            title: 'Discover',
            titleText : 'ADVENTER',
            titleDis: 'Curent By XXX',

            newsplaces : [{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            },{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            },{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            },{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            }]
        }
    }

    postTypeA() {
        return (
            <ScrollView horizontal={true} style={{flexDirection : 'row', flex : 1, padding : 10, alignSelf : 'flex-start'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                            <RkButton
                            rkType="square shadow clear"
                            style={styles.boxGambar} 
                            onPress={() => {
                                    this.props.navigation.navigate('ReportsDetail')
                                }}
                            key={key}>
                                <ImageBackground
                                    style={styles.gambar}
                                    source={require('../../assets/images/dummy/avatar1.jpg')}>
                                    <Text style={styles.imgbac}>Hawai</Text>
                                </ImageBackground>
                            </RkButton>
                        )
                    })
                }
            </ScrollView>
        )
    }

    postTypeB() {
        return (
            
            <ScrollView horizontal={true} style={{flexDirection : 'row', flex : 1, padding : 10, alignSelf : 'flex-start'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                        <RkButton
                            rkType="square shadow clear"
                            style={styles.boxGambar} 
                                onPress={() => {
                                    this.props.navigation.navigate('ReportsDetail')
                                }}
                            key={key}>
                                <ImageBackground
                                    style={styles.gambar}
                                    source={require('../../assets/images/dummy/avatar1.jpg')}>
                                    <Text style={styles.imgbac}>Hawai</Text>
                                </ImageBackground>
                            </RkButton>
                        )
                    })
                }
            </ScrollView>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{height: 200}}>
                    <ImageBackground 
                    style={styles.header}
                    source={require('../../assets/images/lawangsewu.jpg')}>
                    <View style={{ padding: 50 }}>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#FFFFFF'}}>
                            {this.state.title}
                        </Text> 
                        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFFFFF', marginTop: -5, marginBottom:15}}>
                            {this.state.titleText}
                        </Text>
                        <Text style={{fontSize: 12, fontWeight: 'bold',fontStyle:'italic', color: '#f2f2f2'}}>
                            {this.state.titleDis}
                        </Text>
                    </View>
                    </ImageBackground>
                </View>
                
                <ScrollView>
                    <View style={{padding: 10, paddingBottom:0, paddingTop:20}}>
                        <Text style={styles.judul}>Post Type B</Text>
                    </View>
                    {this.postTypeA()}
                    <View style={{padding: 10, paddingBottom: 0, paddingTop: 15}}>
                        <Text style={styles.judul}>Post Type A</Text>
                    </View>
                    {this.postTypeB()}
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 100,
    },
    gambar : {
        flex : 1,
        width : 100,
        height : 175,
    },
    boxGambar : {
        marginRight : 5
    },
    judul: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 2,
        color: '#00bfff' 
    },
    seeall: {
      alignSelf: 'flex-end',  
      paddingTop:10,
      marginTop :17,
      padding: 10,
      position : 'absolute'
    },
    imgbac: {
        padding: 5,
        alignItems: 'center',
        paddingTop: 6,
        color: '#fff',
        fontWeight: 'bold',
        position: 'absolute',
        justifyContent: 'center',
    }
})