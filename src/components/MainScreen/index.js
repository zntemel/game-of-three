import React from "react";
import { Divider, Button } from "antd";
import "./style.scss";

function MainScreen(props) {
  return (
    <div className="main-screen">
      <Button onClick={() => props.history.push("/singleplayer")}>Play With Computer</Button>
      <Button onClick={() => props.history.push("/multiplayer")}>Play With a Real Player</Button>

      <p className="date">Copyright ©2020</p>

    </div>
  );
}

export default MainScreen;
