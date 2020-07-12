import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import SinglePlayer from "./containers/SinglePlayer";
import MultiPlayer from "./containers/MultiPlayer";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={MainScreen} />
          <Route exact path={"/singleplayer"} component={SinglePlayer} />
          <Route exact path={"/multiplayer"} component={MultiPlayer} />
          <Route component={() => <div>Page not found :(</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
