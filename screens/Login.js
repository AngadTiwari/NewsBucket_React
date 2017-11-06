import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput
} from 'react-native';
import { AppAlert } from '../components/AppAlert';
import NavigationBar from 'react-native-navbar';

const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
  };
  
const titleConfig = {
    title: 'Login Screen',
};

export default class Login extends Component {
  
    async componentWillMount() { 
      await Expo.Font.loadAsync({ 
        'Roboto': require('native-base/Fonts/Roboto.ttf'), 
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'), 
      }); 
    } 
  
    render() {
      return (
        <View style={{flex: 1}}>
            <NavigationBar
                title={titleConfig} />
            <Button
                accessibilityLabel="Login via Facebook"
                color="#3b5998"
                title="Login via Facebook" 
                onPress={() => (new AppAlert()).showAlert()} />
            <Text style={{alignSelf: 'center', padding: 8}}>or</Text>
            <Button
                accessibilityLabel="Login via Google +"
                color="#d34836"
                title="Login via Google +" 
                onPress={() => Actions.home()} />
        </View>
      );
    }
  }