import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function Layout(props) {
  return (
    <div className="container">
      <h1>Game Of Three</h1>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};
