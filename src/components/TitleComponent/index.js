import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

function TitleComponent(props) {
  return (
    <>
    <div className="title-component">
      <Link to="/" className="back-link">
        Back
      </Link>
      <h5>{props.title}</h5>
    </div>
    <div>you are the {props.position}</div>
    </>
  );
}

TitleComponent.propTypes = {
  title: PropTypes.string,
  position: PropTypes.string,
};

export default TitleComponent;
