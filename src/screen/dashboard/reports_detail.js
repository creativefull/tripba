import React, { Component } from 'react';
import {
    View,
    Text,
    Image, ScrollView, ImageBackground, StyleSheet
} from 'react-native';
import {RkStyleSheet, RkModalImg, RkButton, RkTabView, RkTheme} from 'react-native-ui-kitten';
import { Marker, MapView } from 'react-native-maps';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';

export default  class ReportsDetail extends Component {
    
    constructor() {
        super()
        this.state = {
            scrollParalax : true
        }
    }

    render() {
        return ( 
            <ParallaxScrollView
                parallaxHeaderHeight={150}
                stickyHeaderHeight={50}
                scrollEnabled={this.state.scrollParalax}
                ref={(ref) => this.paralax}
                backgroundColor={'#4cd137'}
                renderStickyHeader={() => (
                    <View style={{fontSize: 25, fontWeight: 'bold', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, color: '#ffffff', fontWeight: 'bold', paddingTop: 5}}>Sail Sandeq 2018</Text>
                    </View>
                )}
                backgroundSpeed={20}
                onChangeHeaderVisibility={() => {
                    this.setState({
                        scrollEnabled : false
                    })
                }}
                renderForeground={() => (
                    <View style={{height : 250 }}>
                        <ImageBackground
                            style={styles.img}
                            source={require('../../assets/images/dummy/avatar1.jpg')} >
                        </ImageBackground>
                    </View>
                )}>

                <RkTabView rkType="myCustomTab">
                    <RkTabView.Tab title={'Overview'}>
                        <ScrollView>
                            <View style={styles.container}>
                                <Text style={styles.h1}>What is Lorem Ipsum Events ?</Text>
                                <Text style={styles.conten}>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </Text>
                                <Image 
                                style={styles.maps}
                                source={require('../../assets/images/dummy/maps.jpg')} />
                            </View>
                        </ScrollView>
                    </RkTabView.Tab>
                    <RkTabView.Tab title={'How To Get There'}> 
                        <Text>Tab 2 Content</Text>
                    </RkTabView.Tab>
                    <RkTabView.Tab title={'Biaya'}>
                        <Text>Tab 3 Content</Text>
                    </RkTabView.Tab>
                </RkTabView>
             </ParallaxScrollView>
        )
    }
}

RkTheme.setType('RkTabView', 'myCustomTab', {
    borderColor : 'transparent',
    tabContainer : {
        backgroundColor : '#4cd137',
        paddingTop: 10,
        paddingBottom: 10
    },
    content : {
        fontSize : 13,
        color : '#FFF',
        margin: -14,
        padding: 20
    }
})

const styles = StyleSheet.create({
    img : {
        flex: 1,
        height: 100
    },
    container : {
        padding: 10
    },
    h1 : {
        fontSize: 17,
        fontWeight: 'bold'
    },
    maps : {
        marginTop: 10,
        marginRight: 10,
        flex:1,
        width: 338,
    },
})