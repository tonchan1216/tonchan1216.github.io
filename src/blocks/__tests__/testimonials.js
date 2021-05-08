import React from "react"
import renderer from "react-test-renderer"
import { cleanup, render } from "@testing-library/react"

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
    cleanup()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Testimonials />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it("getStatus: loading", () => {
    jest.spyOn(commonHelpers, "getStatus").mockReturnValue("loading")
    const { container } = render(<Testimonials />)
    const success = container.querySelectorAll(".success")
    expect(success).toHaveLength(0)
  })
  it("getStatus: success", () => {
    jest.spyOn(commonHelpers, "getStatus").mockReturnValue("success")
    const { container } = render(<Testimonials />)
    const success = container.querySelectorAll(".success")
    expect(success).toHaveLength(3)
  })
})
