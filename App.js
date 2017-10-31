/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      // <View style={styles.container}>
      //   <Image source={pic} style={{width: 193, height: 110}}/>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native!
      //   </Text>
      //   <Text style={styles.instructions}>
      //     To get started, edit App.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     {instructions}
      //   </Text>
      // </View>
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch'}}>
      <View style={{flexDirection: 'row', padding: 12, backgroundColor: 'powderblue', width: 200, height: 50}} >
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'orange'}} />
      </View>
      <View style={{backgroundColor: 'skyblue', width: 200, height: 50}} />
      <View style={{backgroundColor: 'steelblue', width: 200, height: 50}} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});