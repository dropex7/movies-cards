import React from "react";
import { render } from "enzyme";
import { AboutPage } from "./AboutPage";

describe("<MainPage/>", () => {
  it("should render NotFoundList component", () => {
    const component = render(<AboutPage />);
    expect(component).toMatchSnapshot();
  });
});
