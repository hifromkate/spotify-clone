import React from 'react';
import './Body.css';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDataLayerValue } from '../DataLayer';

function Body({ spotify }) {
  const [{ playlist }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:3gS84cVzmaL1jH6MsG5gsf`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };


  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={playlist?.images[0].url} alt="Playlist cover" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" onClick={playPlaylist} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {playlist?.tracks.items.map(item => (
          <SongRow track={item.track} playSong={playSong} />
        ))}
      </div>
    </div>
  );
}

export default Body;
