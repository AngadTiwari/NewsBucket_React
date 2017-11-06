import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput
} from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class Home extends Component {
  
    render() {
      return (
        <TextInput 
          style={{height: 40, borderColor: 'gray', borderWidth: 2}}
          value="Username"
          />
      );
    }
  }
  