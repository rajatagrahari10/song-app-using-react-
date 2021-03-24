import React from 'react';
import '../App.css';
import SongList from './SongList';
import SongDetails from './SongDetails';

const App=()=> {
  return (
    <div className="App">

        <h1>
          <SongList/>
          _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
          <SongDetails/>
        </h1>
        
    </div>
  );
}

export default App;
