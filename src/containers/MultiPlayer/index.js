import React, { Component } from "react";
import PropTypes from "prop-types";
import ActionComponent from "../../components/ActionComponent";
import GameComponent from "../../components/GameComponent";
import TitleComponent from "../../components/TitleComponent";
import notify from "../../tools/notify"
import modal from "../../tools/modal"
import io from "socket.io-client";

class MultiPlayer extends Component {
  socket = null;
  socketURL = "http://192.168.1.28:3001";

  playerTypes = {
    playerOne: "playerOne",
    playerTwo: "playerTwo",
  };

  state = {
    position: null,
    isGameStart: false,
    turnArray: [],
    requiredNumberToBeDividedByThree: null,
    turnCount: 0,
    winner: null,
    isButtonDisable: false,
  };

  componentDidMount() {
    this.socket = io(this.socketURL);
    this.socket.on("action", (action) => {
      this.setState(
        {
          isGameStart: action.isGameStart || true,
          turnArray: action.turnArray,
          turnCount: action.turnCount,
          winner: action.winner || null,
        },
        () => this.determineDisabledButtonsAndTheWinner()
      );
    });

    this.setPlayerOne();
    this.setPlayerTwo();
  }

  componentWillUnmount() {
    this.socket.close();
    this.socket = null;
  }

  setPlayerOne = () => {
    this.socket.on("setPlayerOne", () => {
      this.setState({
        position: "playerOne",
      });
    });
  };

  setPlayerTwo = () => {
    this.socket.on("setPlayerTwo", () => {
      this.setState({
        position: "playerTwo",
      });
    });
  };

  updateTurnArray = (newTurn) => {
    let temporaryTurnArray = this.state.turnArray;
    temporaryTurnArray.push(newTurn);

    this.setState({
      turnArray: temporaryTurnArray,
    });

    this.socket.emit("action", {
      turnArray: temporaryTurnArray,
      turnCount: this.state.turnCount,
      winner: newTurn.value === 1 ? newTurn.player : null,
    });
  };

  calculateNewNumberToSendOpponent = (turnValue) => {
    let calculatedNumber =
      turnValue + this.state.requiredNumberToBeDividedByThree;
    return parseInt(calculatedNumber, 10) / 3;
  };

  detectTurnPlayer = () => {
    let turnPlayer =
      this.state.turnCount % 2 === 0
        ? this.playerTypes.playerOne
        : this.playerTypes.playerTwo;
    return turnPlayer;
  };

  determineDisabledButtonsAndTheWinner = () => {
    let lastTurn = this.state.turnArray[this.state.turnCount];

    if (lastTurn.value === 1) {
      this.setState({
        isButtonDisable: true,
      });
      this.modalForGameResult(lastTurn.player);
    } else {
      this.setState({
        isButtonDisable: this.state.position === lastTurn.player ? true : false,
      });
    }
  };

  modalForGameResult = (winner) => {
    let message =
      winner === this.state.position
        ? "Congratulations you win!"
        : "Don't be sad, just try again :)";

    let redirectURL = () => this.props.history.push("/")
    
    modal(message, redirectURL); 
  };

  setNextTurn = () => {
    let turnValue = this.state.turnArray[this.state.turnCount - 1].value;
    let newTurn = {
      id: this.state.turnCount,
      player: this.detectTurnPlayer(),
      value: this.calculateNewNumberToSendOpponent(turnValue),
    };
    this.updateTurnArray(newTurn);
  };

  checkActionValue = (actionValue) => {
    let currentTurnValue = this.state.turnArray[this.state.turnCount].value;
    if ((currentTurnValue + actionValue) % 3 === 0) {
      this.setState(
        {
          requiredNumberToBeDividedByThree: actionValue,
          turnCount: this.state.turnCount + 1,
        },
        () => this.setNextTurn()
      );
    } else {
      notify(`${currentTurnValue} can not be divide by ${actionValue}`);
    }
  };

  render() {
    return (
      <>
        <TitleComponent
          title="Multi player game"
          history={this.props.history}
        />
        {!this.state.isGameStart ? (
          <h3>Waiting for another player...</h3>
        ) : (
          <>
            <GameComponent
              turnArray={this.state.turnArray}
              turnPosition={this.state.position}
              gameType={"multiplayer"}
            />
            <ActionComponent
              actionValue={this.checkActionValue}
              isButtonDisable={this.state.isButtonDisable}
            />
          </>
        )}
      </>
    );
  }
}

MultiPlayer.propTypes = {
  history: PropTypes.object,
};

export default MultiPlayer;
