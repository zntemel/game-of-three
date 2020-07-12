import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={"/"} component={MainScreen} />
          <Route component={() => <div>Page not found :(</div>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
