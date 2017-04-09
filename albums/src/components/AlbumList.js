import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

/* This is a functional component
 * Must return some kind of JSX
 * Babel requires the base React class
 *
 */
class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    //Set state to have array of objects on recieving request
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //Want unique value for key consistent across renders.  Idx isn't consistent
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
