import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Layout(props) {
  return <div className="container">{props.children}</div>;
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
