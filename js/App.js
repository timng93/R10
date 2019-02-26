/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import About from "./screens/About";
import client from "./config/api";
import {ApolloProvider} from "react-apollo"
import RootStackNavigator from './navigation/RootStackNavigator'

export default class App extends Component{
  render() {
    return (
      <ApolloProvider client={client}>
      <RootStackNavigator />
        {/* <About /> */}
      </ApolloProvider>
    )
  }
}
