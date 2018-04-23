import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, Button, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RkStyleSheet, RkModalImg, RkButton, RkTabView, RkTheme} from 'react-native-ui-kitten';

// HALAMAN
import Guides from './guide'
import Reports from './reports'
import Events from './events'

class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titleText: "Lawang Sewu",
            bodyText: 'Jelajahi Misteri',
            label: 'Hawaii',
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


    placeRender() {
        return (
            <ScrollView horizontal={true} style={{flexDirection : 'row', flex : 1, padding : 10, alignSelf : 'flex-start'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                            <RkButton
                                rkType="square shadow clear"
                                 style={styles.boxGambar} 
                                onPress={() => {
                                    this.props.navigation.navigate('Detail')
                                }}
                                 key={key}>
                                    <ImageBackground
                                        style={styles.gambar}
                                        source={require('../../assets/images/dummy/avatar1.jpg')}>
                                        <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
                                        <Text>{this.state.label}</Text>
                                        </View>
                                    </ImageBackground>
                               
                            </RkButton>
                        )
                    })
                }
            </ScrollView>
        )
    }

    topRender() {
        return (
            
            <ScrollView horizontal={true} style={{flexDirection : 'row', flex : 1, padding : 10, alignSelf : 'flex-start'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                            <View style={styles.boxGambar} key={key}>
                                <ImageBackground
                                    style={styles.gambar}
                                    source={require('../../assets/images/dummy/avatar1.jpg')}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 100}}>
                                    <Text>{this.state.label}</Text>
                                    </View>
                                </ImageBackground>                                   
                            </View>
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
                    <View style={{alignItems: 'center', padding: 50 }}>
                        <Text style={{fontSize: 35, fontWeight: 'bold', color: '#FFFFFF'}}>
                            {this.state.titleText}
                        </Text>
                        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#FFFFFF'}}>
                            {this.state.bodyText}
                        </Text>
                    </View>
                    </ImageBackground>
                </View>
                <ScrollView>
                    <View style={{padding: 10, paddingBottom:0, paddingTop:20}}>
                        <Text style={styles.judul}>Newest Place</Text>
                        <Text style={styles.seeall}>See All</Text>
                    </View>
                    {this.placeRender()}
                    <View style={{padding: 10, paddingBottom: 0, paddingTop: 15}}>
                        <Text style={styles.judul}>Top Reports</Text>
                        <Text style={styles.seeall}>See All</Text>
                    </View>
                    {this.topRender()}
                </ScrollView>
            </ScrollView>
        );
    }
}

export default TabNavigator(
  {
    Home: {
        screen: HomeScreen,
        navigationOptions : {
            header : null,
            tabBarIcon : ({ tintColor }) => (
                <Ionicons name="ios-apps-outline" size={25} color="#333"/>
            )
        }
    },
    Guides: {
        screen: Guides,
        navigationOptions : {
            header : null,
            tabBarIcon : ({ tintColor }) => (
                <Ionicons name="ios-briefcase-outline" size={25} color="#333"/>
            )
        }        
    },
    Report: {
        screen: Reports,
        navigationOptions : {
            header : null,
            tabBarIcon : ({ tintColor }) => (
                <Ionicons name="ios-bookmarks-outline" size={25} color="#333"/>
            )
        }        
    },
    Events: {
        screen: Events,
        navigationOptions : {
            header : null,
            tabBarIcon : ({ tintColor }) => (
                <Ionicons name="ios-calendar-outline" size={25} color="#333"/>
            )
        }        
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions : {
        showIcon : true,
        inactiveTintColor : '#666',
        activeTintColor : '#000000',
        activeBackgroundColor : 'blue',
        inactiveBackgroundColor : '#000000',
        style : {
            backgroundColor : '#FFF',
            padding : 1
        },
        indicatorStyle : {
            backgroundColor : '#333',
        }
    },
    // initialRouteName : "Guides"
  }
);

const styles = StyleSheet.create({
    header: {
        flex: 1,
        height: 100,
    },
    gambar : {
        flex : 2,
        width : 120,
        height : 130,
    },
    boxGambar : {
        marginRight : 5
    },
    judul: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 2 
    },
    seeall: {
      alignSelf: 'flex-end',  
      paddingTop:10,
      marginTop :17,
      padding: 10,
      position : 'absolute'
    },
    imgbac: {
        flex: 2,
        padding: 35,
        alignItems: 'center',
        paddingTop: 105,
        position: 'absolute',
        justifyContent: 'center',
    },
    textHeader : {
        alignItems: 'center',
    },
    textCenter : {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
    }
})