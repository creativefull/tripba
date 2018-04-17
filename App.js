/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator
} from 'react-navigation'

import Router from './src/index'

const menu = StackNavigator({
  Splash : {
    screen : Router.Splash
  }
})

export default menu