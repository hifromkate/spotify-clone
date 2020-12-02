import React from 'react';
import { loginUrl } from '../spotify.js';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <div className="logoWrapper">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="Spotify"
        />
      </div>
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
};

export default Login;
