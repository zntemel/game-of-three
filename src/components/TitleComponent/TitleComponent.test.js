import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TitleComponent from "./index";

describe("TitleComponent", () => {
  const wrapper = shallow(<TitleComponent title={"sample title"} history={history} />);
  const instance = wrapper.instance();

  describe("shallow wrapper", () => {
    it("should render succesfully with snapshots", () => {
      const component = renderer.create(wrapper).toJSON();
      expect(component).toMatchSnapshot();
    });

    it("instance should be null because of the dumy component", () => {
      expect(instance).toEqual(null);
    });

    it("should render with correct title", () => {
      expect(wrapper.find("PageHeader").props().title).toEqual("sample title");
    });
  });
});
