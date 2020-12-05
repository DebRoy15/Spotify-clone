import React from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import GetAppSharpIcon from "@material-ui/icons/GetAppSharp";

const HomeMenu = () => {
  return (
    <div>
      <div className="logo">
        <img src="/images/spotify.png" alt="" />
        <h2>Spotify</h2>
      </div>

      <div className="menu-pages">
        <div className="list-section active">
          <HomeRoundedIcon />
          <span>Home</span>
        </div>
        <div className="list-section">
          <SearchRoundedIcon />
          <span>Search</span>
        </div>
        <div className="list-section">
          <LibraryMusicOutlinedIcon />
          <span>Your Library</span>
        </div>
      </div>
      <div className="playlist">
        <h5>Playlists</h5>
        <div className="playlist-section">
          <span className="playlist-icon">
            <AddRoundedIcon />
          </span>
          <span>Create Playlist</span>
        </div>
        <div className="playlist-section">
          <span className="playlist-icon">
            <FavoriteRoundedIcon />
          </span>
          <span>Liked Songs</span>
        </div>
      </div>
      <div className="liked-album">
        <h6>Taylor Swift Songs Mix</h6>
      </div>
      <div className="app-download-section">
        <GetAppSharpIcon />
        <h5>Install App</h5>
      </div>
    </div>
  );
};

export default HomeMenu;
