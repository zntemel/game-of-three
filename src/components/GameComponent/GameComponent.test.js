import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import GameComponent from "./index";

const turnArray = [
  {
    id: 0,
    player: "playerOne",
    value: 20,
  },
  {
    id: 1,
    player: "playerTwo",
    value: 7,
  },
  {
    id: 2,
    player: "playerOne",
    value: 2,
  },
  {
    id: 3,
    player: "playerTwo",
    value: 1,
  },
];

describe("Game Component", () => {
  const wrapper = shallow(<GameComponent turnArray={turnArray} />);
  const instance = wrapper.instance();

  describe("shallow wrapper", () => {
    it("should render succesfully with snapshots", () => {
      const component = renderer.create(wrapper).toJSON();
      expect(component).toMatchSnapshot();
    });

    it("instance should be null because of it's dumy component", () => {
      expect(instance).toEqual(null);
    });

    it("list should render with correctly", () => {
      expect(wrapper.find("List").props().dataSource).toEqual(turnArray);
    });
  });
});
