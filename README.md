## Game Of Three - Web Game Application

Game for one player or two players. This application is deployed to Netlify. Please visit [live](https://game-of-three.netlify.app/) website.

For backend application [click here](https://github.com/zntemel/game-of-three-backend)

## Getting Started


The app includes:

- Main page that user can select game type as single player or multiplayer.
- Single player game screen
- Multiplayer game screen


## Game Rules

The main goal is to reach to the number `1` by dividing given numbers to three. The first player that reaches the number `1` is the winner.

Initial Step: Game starts with the random number as a given number.<br>

The player should find which number `{-1, 0, +1}` should be added to the given number to make it divisible by​ three. Players cannot add the wrong number. When the number is added, the divisible number automatically divides by 3. The result is sent to the other player. Opponent applies the same rule to the given number. The same rules are applied until one player reaches the number 1 after the division.

Multiplayer game example: random number is 11.</br>
First player should choose `+1` from `{-1, 0, +1}`. Add `+1` to 11 (result 12). 12 is divided by 3 (result 4). The Second player gets number 4, add `-1` to 4 (result 3). 3 is divided by 3 (result 1).  The second player wins the game!

In the single-player game, the opponent user is the computer. <br>
In a multiplayer game, the opponent user is the real player. Maximum two players can play the game at the same time. Both players should be available to start the game.



## Installing


  ```sh
  git clone git@github.com:zntemel/game-of-three.git
  cd game-of-three
   ```
In the project directory, you can run:

 ```sh 
 yarn install 
 yarn start 
  ```

Runs the app in the development mode.<br>
[http://localhost:3000](http://localhost:3000) will directly open to view it in the browser.<br>

```sh
 yarn test 
  ```

Runs the app tests.<br>

## Architecture

- This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).
- [React Router](https://reacttraining.com/react-router/) is used for routing.
- [Ant Design](https://ant.design/) is used as a React UI framework.
- [Sass](https://sass-lang.com/) is used as a CSS extension language.
- [Jest](https://jestjs.io/) / [Enzyme](https://airbnb.io/enzyme/) is used as a JavaScript Testing Framework and Utility.
- [Socket.io-client](https://www.npmjs.com/package/socket.io-client) package is used for socket connection.
- [Eslint](https://eslint.org/) is used for consistent code base.
- Prop Types library is used.
- Node version ```14.5.0``` is used.

## Something Missing?

- Please contact me, I am open to any feedback.