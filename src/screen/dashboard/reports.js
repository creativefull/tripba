import React, { Component } from 'react';
import { Dimensions, View, Text, Image, ImageBackground, Button, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
    RkButton
} from 'react-native-ui-kitten'
import ReportsCategory from './reports_category'
import ReportsDetail from './reports_detail'

class Reports extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props)
        this.state = {
            titleText: 'Reports',
            label: 'Sawarna',
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

    ReportsRender() {
        let size = this._calculateItemSize();
        return (
            <View style={{justifyContent : 'center', flexDirection : 'row', flexWrap : 'wrap'}}>
                {
                    this.state.newsplaces.map((n, key) => {
                        return (
                            <RkButton
                                rkType="square shadow clear"
                                style={{width : size, height : size + 30, marginTop :5}}
                                onPress={() => {
                                    this.props.navigation.navigate('ReportsCategory')
                                }}
                                key={key}>
                                <ImageBackground
                                    style={styles.boxGambar}
                                    source={require('../../assets/images/dummy/avatar1.jpg')}>
                                    <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 185}}>
                                    <Text>{this.state.label}</Text>
                                    </View>
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

            <ScrollView>
                <View style={{alignItems: 'center', paddingBottom: 10, paddingTop: 15}}>
                    <Image style={styles.img} source={require('../../assets/images/trip-logo.png')}/>
                </View>
                <View>
                     <Text style={{fontSize: 23, fontWeight: 'bold', marginLeft: 20, color: 'black'}}>{this.state.titleText}</Text>
                </View>
                {this.ReportsRender()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gambar : {
        alignItems: 'center'
    },
    gridGambar : {
        flex : 1,
        justifyContent : 'center',
        flexDirection : 'column',
    },
    boxGambar : {
        height: 230,
        flex : 1,
        margin : 3
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
        padding: 2
    }
})

export default StackNavigator({
    Reports : {
        screen : Reports
    },
    ReportsCategory : {
        screen : ReportsCategory
    },
    ReportsDetail : {
        screen : ReportsDetail 
    },
}, {
    headerMode : 'none',
    initialRouteName : 'Reports'
})