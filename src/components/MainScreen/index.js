import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function MainScreen() {
  return (
    <div className="main-screen">
      <Link to="/singleplayer">Play With Computer</Link>
      <Link to="/multiplayer">Play With Real Player</Link>
    </div>
  );
}

export default MainScreen;
