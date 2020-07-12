import React from "react";
import PropTypes from "prop-types";
import { PageHeader } from "antd";

import "./style.scss";

function TitleComponent(props) {
  const { title, playerNumber } = props;
  return (
    <>
      <div className="title-component">
        <PageHeader
          className="game-page-header"
          onBack={() => props.history.push("/")}
          title={title}
        />
      </div>
      {playerNumber && <div>you are the {playerNumber}</div>}
    </>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  playerNumber: PropTypes.string,
  history: PropTypes.object,
};

export default TitleComponent;
