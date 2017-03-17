// Index.android.js
// Import libray, create component, render to device

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//First component, equivalent to

const App = () => (
  <Header headerText={'Albums'} />
);


//Render to device
//Syntax: registerComponent('projectName', function components)
AppRegistry.registerComponent('albums', () => App);
