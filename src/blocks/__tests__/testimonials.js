import React from "react"
import renderer from "react-test-renderer"
import { cleanup, fireEvent, render, screen } from "@testing-library/react"

import Testimonials from "../testimonials"
import * as commonHelpers from "../../libs/commonHelpers"

jest.mock("web-vitals", () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getLCP: jest.fn(),
}))

describe("Testimonials", () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Testimonials />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("getStatus: loading", () => {
    jest.spyOn(commonHelpers, "getStatus").mockReturnValue("loading")
    const { container } = render(<Testimonials />)
    // screen.debug()
  })
  it("getStatus: success", () => {
    jest.spyOn(commonHelpers, "getStatus").mockReturnValue("success")
    const { container } = render(<Testimonials />)
    // screen.debug()
  })
})
