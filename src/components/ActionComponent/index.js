import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./style.scss";

function ActionComponent(props) {
  return (
    <div className="action-component">
      <Button
        value={-1}
        onClick={() => props.actionValue(-1)}
        disabled={props.isButtonDisable}
      >
        -1
      </Button>
      <Button
        value={0}
        onClick={() => props.actionValue(0)}
        disabled={props.isButtonDisable}
      >
        <span>0</span>
      </Button>
      <Button
        value={1}
        onClick={() => props.actionValue(1)}
        disabled={props.isButtonDisable}
      >
        <span>1</span>
      </Button>
    </div>
  );
}

ActionComponent.propTypes = {
  actionValue: PropTypes.func,
  isButtonDisable: PropTypes.bool,
};

ActionComponent.defaultProps = {
  isButtonDisable: false,
};

export default ActionComponent;
