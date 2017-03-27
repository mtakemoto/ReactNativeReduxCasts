// Index.android.js
// Import libray, create component, render to device

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//First component, equivalent to

//Cannot return 2 siblings.  Will only return the 1st
const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


//Render to device
//Syntax: registerComponent('projectName', function components)
AppRegistry.registerComponent('albums', () => App);
