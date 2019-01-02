/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Header from './src/components/headers'
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text={"Hi Sudha"} />
        <AlbumList />
      </View>
    );
  }
}

