import React from "react";
import PropTypes from "prop-types";
import { Divider } from "antd";
import "./style.scss";

function Layout(props) {
  return (
    <div className="container">
      <h1>Game Of Three</h1>
      <Divider className="layout-divider"/>
      {props.children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
