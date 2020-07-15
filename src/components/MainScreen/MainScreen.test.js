import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import MainScreen from "./index";

describe("MainScreen", () => {
  const wrapper = shallow(<MainScreen />);
  const instance = wrapper.instance();
  const gameName = "Game Of Three";

  describe("shallow wrapper", () => {
    it("should render succesfully with snapshots", () => {
      const component = renderer.create(wrapper).toJSON();
      expect(component).toMatchSnapshot();
    });

    it("instance should be null because of it's dumy component", () => {
      expect(instance).toEqual(null);
    });

    it("should be include name game", () => {
      expect(wrapper.find("h1").contains(gameName)).toBe(true);
    });

    it("should be include divider component", () => {
      expect(wrapper.find("Divider").exists()).toBeTruthy();
    });

    it("should be include two button", () => {
      expect(wrapper.find("Button")).toHaveLength(2);
    });
  });
});
