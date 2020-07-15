import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ActionComponent from "./index";

describe("ActionComponent", () => {
  const wrapper = shallow(<ActionComponent/>);
  const instance = wrapper.instance();

  describe("shallow wrapper", () => {
    it("should render succesfully with snapshots", () => {
      const component = renderer.create(wrapper).toJSON();
      expect(component).toMatchSnapshot();
    });

    it("instance should be null because of it's dumy component", () => {
      expect(instance).toEqual(null);
    });

    it("should be include 3 button", () => {
      expect(wrapper.find('Button')).toHaveLength(3);
    });
  });
});
