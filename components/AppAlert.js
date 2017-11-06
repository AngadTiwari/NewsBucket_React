import React, { Component, Alert } from 'react';

export class AppAlert extends Component {
    constructor(props) {
        // Works on both iOS and Android
        Alert.alert(...props);
        super(props);
    }
}