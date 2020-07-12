import React from "react";
import { shallow, render, mount } from "enzyme";
import renderer from "react-test-renderer";
import { Link } from "react-router-dom";
import TitleComponent from "./index";

describe("TitleComponent", () => {
  const wrapper = shallow(
    <TitleComponent title={"sample title"} playerNumber={"sample player"} />
  );
  const instance = wrapper.instance();

  describe("shallow wrapper", () => {
    it("should render succesfully with snapshots", () => {
      const component = renderer.create(wrapper).toJSON();
      expect(component).toMatchSnapshot();
    });

    it("instance should be null because of the dumy component", () => {
      expect(instance).toEqual(null);
    });

    it("should be include link to main screeen", () => {
      expect(wrapper.find(Link).props().to).toBe("/");
    });

    it("should render with correct title", () => {
      expect(wrapper.find("h5").contains("sample title")).toBe(true);
    });

    it("should render with correct player number", () => {
      expect(wrapper.find("div").contains("sample player")).toBe(true);
    });
  });
});
