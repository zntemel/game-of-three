import React from "react";
import { Divider, Button } from "antd";
import "./style.scss";

function MainScreen(props) {
  return (
    <div className="main-screen">
      <h1 className="game-name">Game Of Three</h1>
      <Divider className="main-screen-divider" />
      <Button onClick={() => props.history.push("/singleplayer")}>
        Play With Computer
      </Button>
      <Button onClick={() => props.history.push("/multiplayer")}>
        Play With a Real Player
      </Button>
      <p className="copyright">Copyright ©2020</p>
    </div>
  );
}

export default MainScreen;
