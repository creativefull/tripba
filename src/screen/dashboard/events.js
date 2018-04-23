import React, { Component } from 'react';
import { Dimensions, View, Text, Image, ImageBackground, Button, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
    RkButton
} from 'react-native-ui-kitten'
import EventsDetail from './events_detail'

class Events extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
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
            },{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            },{
                image : require('../../assets/images/dummy/avatar1.jpg'),
                label : 'Hawaii'
            }]
        }
    }
    _calculateItemSize() {
        let {height, width} = Dimensions.get('window');
        return (width - 5 * 6) / 2;
    }

    EventsRender() {
        let size = this._calculateItemSize();
        return (
            <View style={{justifyContent : 'center', flexDirection : 'row', flexWrap : 'wrap'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                            <RkButton
                                rkType="square shadow clear"
                                style={{width : size, height : size + 30, marginBottom : 0, marginTop : 10}}
                                onPress={() => {
                                    this.props.navigation.navigate('EventsDetail')
                                }}
                                key={key}>
                                <ImageBackground
                                    style={styles.boxGambar}
                                    source={require('../../assets/images/dummy/avatar1.jpg')}>
                                    <Text style={styles.imgbac}>Hawai</Text>
                                </ImageBackground>
                            </RkButton>
                        )
                    })
                }
            </View> 
        )
    }

    render() {
        return (

            <ScrollView style={styles.gambar}>
                <View style={{padding: 10, paddingBottom: 0, paddingTop: 15}}>
                    <Image style={styles.img} source={require('../../assets/images/trip-logo.png')}/>
                    <Text style={styles.judul}>Events</Text>
                </View>
                {this.EventsRender()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gambar : {
        padding: 0
    },
    gridGambar : {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'column',
    },
    boxGambar : {
        height: 230,
        flex : 1,
        margin : 5,
        flexDirection : 'row'
    },
    judul: {
        fontSize: 25,
        fontWeight: 'bold',
        margin: 10,
        flexDirection: 'row',
        color: 'black' 
    },
    imgbac: {
        padding: 55,
        alignItems: 'center',
        paddingTop: 150,
        position: 'absolute',
        justifyContent: 'center',
    },
    img : {
        width: 170,
        height: 22,
        padding: 2,
        marginLeft: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default StackNavigator({
    Events : {
        screen : Events
    },
    EventsDetail : {
        screen : EventsDetail
    },
}, {
    headerMode : 'none',
    initialRouteName : 'Events'
})