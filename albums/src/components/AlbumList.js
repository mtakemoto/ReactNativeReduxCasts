import React, { Component } from 'react';
import { View, Text } from 'react-native';

/* This is a functional component
 * Must return some kind of JSX
 * Babel requires the base React class
 */
class AlbumList extends Component {
  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

export default AlbumList;
