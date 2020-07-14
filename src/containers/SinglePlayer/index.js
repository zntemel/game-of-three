import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionComponent from "../../components/ActionComponent";
import GameComponent from "../../components/GameComponent";
import TitleComponent from "../../components/TitleComponent";
import { Modal } from "antd";
import "./style.scss";

class SinglePlayer extends Component {
  turnCount = 0;
  requiredNumberToBeDividedByThree = null;

  playerTypes = {
    computer: "computer",
    player: "player",
  };

  state = {
    turnArray: [],
  };

  componentDidMount() {
    this.setState({
      turnArray: [
        {
          id: 0,
          player: this.playerTypes.computer,
          value: this.calculateInitialNumber(),
        },
      ],
    });
  }

  calculateInitialNumber = () => parseInt(Math.random() * 100, 10);

  detectTurnPlayer = () => {
    let turnPlayer =
      this.turnCount % 2 === 0
        ? this.playerTypes.computer
        : this.playerTypes.player;
    return turnPlayer;
  };

  assignNumberNeedsToBeAdded = (turnValue) => {
    if (turnValue % 3 === 0) {
      this.requiredNumberToBeDividedByThree = 0;
    } else if ((turnValue + 1) % 3 === 0) {
      this.requiredNumberToBeDividedByThree = 1;
    } else if ((turnValue - 1) % 3 === 0) {
      this.requiredNumberToBeDividedByThree = -1;
    }
  };

  calculateNewNumberToSendOpponent = () => {
    let calculatedNumber =
      this.state.turnArray[this.turnCount - 1].value +
      this.requiredNumberToBeDividedByThree;
    return parseInt(calculatedNumber, 10) / 3;
  };

  setNewTurn = () => {
    let newTurn = {
      id: this.turnCount,
      player: this.detectTurnPlayer(),
      value: this.calculateNewNumberToSendOpponent(),
    };
    this.updateTurnArray(newTurn);
  };

  updateTurnArray = (newTurn) => {
    let temporaryTurnArray = this.state.turnArray;
    temporaryTurnArray.push(newTurn);

    this.setState({
      array: temporaryTurnArray,
    });
  };


  calculateGameNumbers = () => {
    let turnValue = this.state.turnArray[this.turnCount].value;

    this.assignNumberNeedsToBeAdded(turnValue);
    this.turnCount += 1;
    this.calculateNewNumberToSendOpponent();
    this.setNewTurn();
  };

  checkAddedNumberAndResult = (addedNumber) => {
    if ((this.state.turnArray[this.turnCount].value + addedNumber) % 3 === 0) {
      /* eslint-disable */
      for (const property in this.playerTypes) {
        this.calculateGameNumbers();
        if (this.calculateNewNumberToSendOpponent() === 1) {
          this.modalForGameResult(this.detectTurnPlayer());
          return true;
        }
      }
    } else {
      alert("wrong number");
    }
  };

  modalForGameResult = (winner) => {
    const that = this;
    let message =
      winner === this.playerTypes.computer
        ? "Don't be sad, just try again :)"
        : "Congratulations you win!";

    Modal.info({
      title: message,
      icon: false,
      okText: "Play Again",
      onOk() {
        return that.props.history.push("/");
      },
    });
  };

  render() {
    return (
      <>
        <TitleComponent
          title="Single player game"
          history={this.props.history}
        />
        <GameComponent turnArray={this.state.turnArray} />
        <ActionComponent actionValue={this.checkAddedNumberAndResult} />
      </>
    );
  }
}

SinglePlayer.propTypes = {
  history: PropTypes.object,
};

export default SinglePlayer;
