import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./style.scss";

function ActionComponent(props) {
  return (
    <div className="action-component">
      <Button value={-1} onClick={() => props.sendValue(-1)}>
        -1
      </Button>
      <Button value={0} onClick={() => props.sendValue(0)}>
        <span>0</span>
      </Button>
      <Button value={1} onClick={() => props.sendValue(1)}>
        <span>1</span>
      </Button>
    </div>
  );
}

ActionComponent.propTypes = {
  sendValue: PropTypes.func,
};

export default ActionComponent;
