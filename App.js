/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput
} from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';

export const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="home" component={Home} title="Home" />
    </Stack>
  </Router>
);