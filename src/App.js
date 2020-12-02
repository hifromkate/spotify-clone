import React, { useEffect, useState } from 'react';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import Login from './Login/Login';
import Player from './Player/Player';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // with empty array it will run only at first render
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    // add _ for security reason
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist('3gS84cVzmaL1jH6MsG5gsf').then(response => {
        dispatch({
          type: 'SET_PLAYLIST',
          playlist: response,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify
      });
    }
  }, []);

  console.log('Person', user);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
