import './App.css';
import Playlist from '../src/Components/CriarPlaylists'
import AddMusica from '../src/Components/AddMusicas'
import React from 'react';

export default class App extends React.Component {


  state = {
    idPlaylist: '',


  }

  saveId = (id) => {
    this.setState({idPlaylist:id})

  }

  render() {
    return (
      <div>
        
        <Playlist />
        <AddMusica id = {this.state.idPlaylist}/>


        

      </div>
    );
  }

}


