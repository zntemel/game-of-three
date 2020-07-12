import React from "react";
import PropTypes from "prop-types";
import { List } from "antd";
import "./style.scss";

function GameComponent(props) {
  return (
    <div className="game-component">
      <List
        dataSource={props.turnArray}
        renderItem={(turn) => (
          <List.Item key={turn.id} className={"game-number " + turn.player}>
            <div>{turn.player}:</div>
            <div>{turn.value}</div>
          </List.Item>
        )}
      />
    </div>
  );
}

GameComponent.propTypes = {
  turnArray: PropTypes.array,
};

export default GameComponent;
