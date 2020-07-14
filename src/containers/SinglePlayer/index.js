import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionComponent from "../../components/ActionComponent";
import GameComponent from "../../components/GameComponent";
import TitleComponent from "../../components/TitleComponent";
import notify from "../../tools/notify";
import modal from "../../tools/modal";
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

  calculateInitialNumber = () => {
    let createRandomNumber = parseInt(Math.random() * 100, 10)
    if(createRandomNumber < 2)
      this.calculateInitialNumber()
    else 
      return createRandomNumber
  };

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

  checkActionNumberAndResult = (actionNumber) => {
    let currentValue = this.state.turnArray[this.turnCount].value;
    if ((currentValue + actionNumber) % 3 === 0) {
      /* eslint-disable */
      for (const property in this.playerTypes) {
        this.calculateGameNumbers();
        if (this.calculateNewNumberToSendOpponent() === 1) {
          this.modalForGameResult(this.detectTurnPlayer());
          return true;
        }
      }
    } else {
      notify(`${currentValue} can not be divide by ${actionNumber}`);
    }
  };

  modalForGameResult = (winner) => {
    const that = this;
    let message =
      winner === this.playerTypes.computer
        ? "Don't be sad, just try again :)"
        : "Congratulations you win!";

    let redirectURL = () => this.props.history.push("/");

    modal(message, redirectURL);
  };

  render() {
    return (
      <>
        <TitleComponent
          title="Single player game"
          history={this.props.history}
        />
        <GameComponent turnArray={this.state.turnArray} />
        <ActionComponent actionValue={this.checkActionNumberAndResult} />
      </>
    );
  }
}

SinglePlayer.propTypes = {
  history: PropTypes.object,
};

export default SinglePlayer;
