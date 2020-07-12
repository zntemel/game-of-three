import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import SinglePlayer from "./containers/SinglePlayer";
import MultiPlayer from "./containers/MultiPlayer";
import MainScreen from "./components/MainScreen";
import App from "./App";

let pathMap = {};

describe("Routes components", () => {
  beforeAll(() => {
    const component = shallow(<App />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  it("should show MainScreen component", () => {
    expect(pathMap["/"]).toBe(MainScreen);
  });

  it("should show SinglePlayer component", () => {
    expect(pathMap["/singleplayer"]).toBe(SinglePlayer);
  });

  it("should show MultiPlayer component", () => {
    expect(pathMap["/multiplayer"]).toBe(MultiPlayer);
  });

  it("should show page not found case", () => {
    expect(pathMap[undefined]()).toMatchObject(<div>Page not found :(</div>);
  });
});
