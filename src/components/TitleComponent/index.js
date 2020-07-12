import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./style.scss";

function TitleComponent(props) {
  const { title, playerNumber } = props;
  return (
    <>
      <div className="title-component">
        <BrowserRouter>
          <Link to="/" className="back-link">
            Back
          </Link>
        </BrowserRouter>
        <h5>{title}</h5>
      </div>
      {playerNumber && <div>you are the {playerNumber}</div>}
    </>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  playerNumber: PropTypes.string,
};

export default TitleComponent;
