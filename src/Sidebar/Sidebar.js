import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption/SidebarOption';
import { useDataLayerValue } from '../DataLayer';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicSearch from '@material-ui/icons/LibraryMusic';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicSearch} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlists => (
        <SidebarOption title={playlists.name} />
      ))}
      <SidebarOption title="Hip hop" />
      <SidebarOption title="Rock" />
    </div>
  );
}

export default Sidebar;
