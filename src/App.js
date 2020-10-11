import React from 'react';
import profileImage from './img/lidar.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Profile</h1>
      <h2>Auther: lidar koma</h2>
      <img src={profileImage} alt="profile" />
    </div>
  );
}

export default App;
