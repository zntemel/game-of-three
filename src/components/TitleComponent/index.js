import React from "react";
import PropTypes from "prop-types";
import { PageHeader } from "antd";

import "./style.scss";

function TitleComponent(props) {
  const { title, history } = props;

  return (
    <>
      <div className="title-component">
        <PageHeader
          className="game-page-header"
          onBack={() => history.push("/")}
          title={title}
        />
      </div>
    </>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  history: PropTypes.object,
};

export default TitleComponent;
