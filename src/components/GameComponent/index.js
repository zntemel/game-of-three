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
            {props.gameType === "multiplayer" ? (
              <div>
                {props.turnPosition === turn.player ? "You" : "Player"}:
              </div>
            ) : (
              <div>{turn.player === "player" ? "You" : "Computer"}:</div>
            )}

            <div>{turn.value}</div>
          </List.Item>
        )}
      />
    </div>
  );
}

GameComponent.propTypes = {
  turnArray: PropTypes.array,
  turnPosition: PropTypes.string,
  gameType: PropTypes.string,
};

export default GameComponent;
